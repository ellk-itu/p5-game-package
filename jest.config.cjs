const { createDefaultPreset } = require("ts-jest");

module.exports = {
  ...createDefaultPreset(),
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  transformIgnorePatterns: [
    '/node_modules/(?!p5/)' // Replace with the specific library if needed
  ],
  testEnvironment: 'jsdom',
};