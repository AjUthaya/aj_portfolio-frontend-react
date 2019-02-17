// EXPORT
module.exports = () => {
  // Working variables
  const config = require("../../../src/local"),
    validateApiRoute = require("../functions/validateApiRoute.spec.ts");

  // API data
  describe("API data", () => {
    // A. RUN: Once before all tests in this wrapper
    before(() => {});

    // B. TEST: Resume
    describe("Resume", () => {
      validateApiRoute(config.api.endpoints.resume);
    });

    // C. TEST: Skills
    describe("Skills", () => {
      validateApiRoute(config.api.endpoints.skills);
    });

    // D. TEST: Categories
    describe("Categories", () => {
      validateApiRoute(config.api.endpoints.categories);
    });

    // D. TEST: Projects
    describe("Projects", () => {
      validateApiRoute(config.api.endpoints.projects);
    });
  });
};
