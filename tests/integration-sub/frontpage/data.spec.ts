// EXPORT
module.exports = () => {
  // Working variables
  const url = Cypress.env("URL"),
    config = require("../../../src/local");

  // API data
  describe("API data", () => {
    // A. RUN: Once before all tests in this wrapper
    before(() => {});

    // B. TEST: Resume
    describe("Resume", () => {});

    // C. TEST: Skills
    describe("Skills", () => {});

    // D. TEST: Projects
    describe("Projects", () => {});
  });
};
