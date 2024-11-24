export default {
    testEnvironment: "jest-environment-jsdom",
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleNameMapper: {
      "\\.(css|scss)$": "identity-obj-proxy",
    },
  };
  