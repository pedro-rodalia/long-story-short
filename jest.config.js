module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
    '.+\\.(scss|png|jpg|svg|ttf)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@test-utils/(.*)$': '<rootDir>/tests/unit/utils/$1',
    '^.+\\.(scss|png|jpg|svg|ttf)$': 'jest-transform-stub',
  },
  setupFiles: ['<rootDir>/tests/unit/setup'],
  transformIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**'],
  verbose: true,
  coverageDirectory: 'tests/unit/coverage',
}
