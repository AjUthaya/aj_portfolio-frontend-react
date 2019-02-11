/// <reference types="Cypress" />

// DEFINE: Working variables
const url = Cypress.env("URL");

describe("Skills", () => {
  // 1. RUN: Once before all tests in this wrapper
  before(() => {
    // I. GOTO: Frontpage, give data some time to load
    cy.visit(url).wait(2000);
  });
});
