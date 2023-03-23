# Build stage
FROM hub.lumigame.com/docker-hub/library/node:18.14-alpine AS builder

RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@latest --activate 
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN yarn run reg && pnpm fetch --prod
RUN pnpm install --frozen-lockfile --prod
RUN pnpm prune --prod

COPY . .
RUN pnpm build

# Production stage
FROM hub.lumigame.com/docker-hub/library/node:18.14-alpine AS runner
RUN corepack enable && corepack prepare pnpm@latest --activate 

WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/configs.json ./configs.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next-i18next.config.js ./next-i18next.config.js
COPY --from=builder /app/next.config.js ./next.config.js

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 && \
    chown -R nextjs:nodejs /app/.next

USER nextjs

EXPOSE 5000

ENV PORT 5000

CMD ["pnpm", "start"]
