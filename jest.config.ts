module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.stories.{ts,tsx}', '!src/**/*.types.ts'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}