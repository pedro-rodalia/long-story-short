module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.(scss|png|jpg|ttf)$": "jest-transform-stub"
  },
  transformIgnorePatterns: ["/node_modules/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,vue}", "!**/node_modules/**"],
  verbose: true,
  coverageDirectory: "tests/unit/coverage"
};
