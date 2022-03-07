module.exports = {
  moduleNameMapper: {
    "@core/(.*)": "<rootDir>/src/app/core/$1",
  },
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/cypress",
    "<rootDir>/projects/front-end/cypress",
    "<rootDir>/projects/shared/cypress",
    "<rootDir>/projects/ui/cypress",
  ],
};
