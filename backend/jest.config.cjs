module.exports = {
    // Specifies the environment in which the tests are run. "node" is suited for server-side testing.
    testEnvironment: 'node',
  
    // An array of glob patterns indicating a set of files for which coverage information should be collected.
    collectCoverage: true,
    collectCoverageFrom: [
      '**/routes/**/*.js', // Adjust this to the specific directories you want coverage for.
      '!**/node_modules/**', // Exclude node_modules from coverage.
      '!**/__tests__/**', // Exclude test files from coverage.
    ],
  
    // The directory where Jest should output its coverage files.
    coverageDirectory: 'coverage',
  
    // An array of file extensions your modules use. This is necessary if you're using other types than '.js'.
    moduleFileExtensions: ['js', 'json', 'cjs'],
  
    // An array of regexp pattern strings that are matched against all test paths before executing the test.
    testMatch: [
      '**/__tests__/**/*.[jt]s?(x)', // Look for test files in any __tests__ folder.
      '**/?(*.)+(spec|test).[tj]s?(x)' // Also look for any files ending in .spec.js, .test.js, .spec.ts, or .test.ts.
    ],
  
    // Indicates whether each individual test should be reported during the run. 
    verbose: true,
  
    // An array of regexp pattern strings that are matched against all source file paths before re-running tests in watch mode.
    // This is useful to clear mocks/stubs between tests.
    watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.stryker-tmp/'],
  
    // Module path patterns to be ignored during testing.
    modulePathIgnorePatterns: ["<rootDir>/.stryker-tmp/"],
  
    // Setup files that will be run before each test file in the suite.
    setupFilesAfterEnv: ['./jest.setup.js'], // Use this if you have specific things to setup before tests run like extending expect or setting up global variables.
  
    // Custom reporters to use with Jest (can be npm modules or paths to modules).
    reporters: ['default', 'jest-junit'], // 'jest-junit' outputs test results in a JUnit XML format for CI process ingestion.
  
    // Automatically clear mock calls and instances between every test. Very useful if you do a lot of mocking.
    clearMocks: true,
  
    // Indicates whether the coverage information should be collected while executing the test.
    coverageReporters: ['text', 'lcov', 'cobertura'] // 'cobertura' is often used for CI/CD integration.
  };
  
  