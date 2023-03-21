import nextJest from "next/jest";

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./",
});

const customJestConfig = {
    collectCoverageFrom: ["**/*.{jsx,ts,tsx}"],
    moduleFileExtensions: ["ts", "tsx", "js"],
    testMatch: ["**/*.(test|spec).(ts|tsx)"],
    coveragePathIgnorePatterns: ["node_modules", ".d.ts", ".next", "coverage", "public"],
    coverageReporters: ["json", "lcov", "text", "text-summary"],
    transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/mocks.js",
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    },
    testResultsProcessor: "jest-sonar-reporter",
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["jest-extended", "@testing-library/jest-dom/extend-expect", "./__mocks__/global.js"],
};

export default createJestConfig(customJestConfig);
