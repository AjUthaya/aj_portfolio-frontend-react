/// <reference types="Cypress" />

const config = require("../../../src/local");

// DEFINE: Working variables
const url = config.portfolio.url;

describe("Screenshots", () => {
  // 1. RUN: Once before all tests in this wrapper
  before(() => {
    // I. GOTO: Frontpage
    cy.visit(url);

    // 2. SET: API data into local storage
    localStorage.setItem(name, JSON.stringify({}));
  });

  // 2. DEFINE: 300x170
  describe("W: 300px, H: 170px", () => {
    // A. RUN: Once before tests inside this wrapper
    before(() => {
      // I. DEFINE: Screen size
    });

    // A. WRAPPER
    it("Fullscreen", () => {
      // I. SCREENSHOT
      //cy.screenshot({ capture: "fullPage", disableTimersAndAnimations: true });
    });
  });
});
