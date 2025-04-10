module.exports = {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest",  // Use babel-jest to transform JS/JSX files
    },
    testEnvironment: 'jsdom',  // Use jsdom for simulating a browser environment
  };
  