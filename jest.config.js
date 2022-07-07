module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-transform-stub',
  },
};
