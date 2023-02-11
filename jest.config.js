const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  setupFiles: ["dotenv/config"],
  moduleDirectories: ["node_modules", "<rootDir>/"]
};
module.exports = createJestConfig(customJestConfig);