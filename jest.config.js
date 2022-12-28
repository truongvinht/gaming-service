const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
  moduleDirectories: ["node_modules", "<rootDir>/"]
};
module.exports = createJestConfig(customJestConfig);