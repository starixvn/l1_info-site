# Build stage
FROM hub.lumigame.com/docker-hub/library/node:18.14-alpine AS builder
WORKDIR /app

ENV YARN_CACHE_FOLDER=/root/.yarn

RUN --mount=type=cache,target=$YARN_CACHE_FOLDER \
     yarn cache dir && yarn cache list

COPY package.json yarn.lock .modprunerrc ./
RUN yarn run reg
RUN --mount=type=cache,target=$YARN_CACHE_FOLDER \
     yarn install --frozen-lockfile --verbose

COPY . .
RUN yarn build

# Production stage
FROM hub.lumigame.com/docker-hub/library/node:18.14-alpine AS runner

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
CMD ["yarn", "start"]
