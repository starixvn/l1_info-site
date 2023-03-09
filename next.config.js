const basePath = "";
const configs = require("./configs.json");
const { i18n } = require("./next-i18next.config");
const { v4: uuidv4 } = require("uuid");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: configs,
    productionBrowserSourceMaps: configs.enableSourceMap,
    generateBuildId: async () => {
        return uuidv4();
    },
    i18n,
    experimental: {
        forceSwcTransforms: true,
        swcMinify: true,
        optimizeCss: true,
        gzipSize: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    basePath,
    env: {
        buildVersion: uuidv4(),
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|mp3)$/,
            use: {
                loader: "url-loader",
                options: {
                    limit: 100000,
                },
            },
        });

        if (isServer) {
            config.externals.push(({ context, request }, callback) => {
                if (/\.test\.(jsx?|tsx?)$/.test(request)) {
                    return callback(null, "mock");
                }
                callback();
            });
        }

        return config;
    },
    async rewrites() {
        return [
            {
                source: "/category",
                destination: "/category/allGames",
            },
        ];
    },
};

module.exports = nextConfig;
