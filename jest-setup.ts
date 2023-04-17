import '@testing-library/jest-dom';
module.exports = {
    "testEnvironment": "jsdom",
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts(x)?',
        '!src/pages/**/*.tsx',
        '!src/styles/**/*.ts',
        '!src/utils/apollo.ts',
        '!src/types/**/*.d.ts',
        '!src/**/mock.ts',
        '!src/**/styles.ts',
    ],
    moduleNameMapper: {
        '^styled-components':
            '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
    }
}