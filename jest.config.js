const config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.ts?$": "ts-jest", // TypeScript test files are transformed to js
    "^.+\\.(js|jsx)$": "babel-jest", // use babel-jest to transform dependencies in node_modules
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
module.exports = config;
