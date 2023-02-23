const basePath = "";
const configs = require("./configs.json");
const { i18n } = require("./next-i18next.config");
const { v4: uuidv4 } = require("uuid");

const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: configs,
    productionBrowserSourceMaps: configs.enableSourceMap,
    generateBuildId: async () => {
        return uuidv4();
    },
    excludeFile: (str) => /node_modules/.test(str) || /\*.{spec,test}.js/.test(str),
    i18n,
    experimental: {
        forceSwcTransforms: true,
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
};

module.exports = nextConfig;
