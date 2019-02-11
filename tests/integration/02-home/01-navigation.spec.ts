/// <reference types="Cypress" />

// DEFINE: Working variables
const url = Cypress.env("URL");

//
describe("Navigation", () => {
  // A. RUN: Once before all tests in this wrapper
  before(() => {
    // I. GOTO: Frontpage, give data some time to load
    cy.visit(url);
  });

  // B. DEFINE: Logo
  describe("Logo", () => {
    //
  });

  // C. DEFINE: Menu
  describe("Menu", () => {
    //
  });

  // D. DEFINE: Toggle
  describe("Toggle", () => {
    // I. VALIDATE: Initial state
    it("State: Initial", () => {
      // 1. TEST: Overlayer
      cy.get(".overlayer").should("not.exist");

      // 2. TEST: Toggle does not have the class active
      cy.get(".hamburger").should("not.have.class", "active");
    });

    // II. TOGGLE: Menu to open
    it("Toggle: Open", () => {
      cy.get(".navigation__menu__toggle").click("center");
    });

    // III. VALIDATE: Open state
    it("State: Open", () => {
      // 1. TEST: Overlayer
      cy.get(".overlayer").should("exist");

      // 2. TEST: Toggle has the class active
      cy.get(".hamburger").should("have.class", "active");
    });

    // IIII. TOGGLE: Menu to close
    it("Toggle: Close", () => {
      cy.get(".navigation__menu__toggle").click("center");
    });

    // I. VALIDATE: Closed state
    it("State: Closed", () => {
      // 1. TEST: Overlayer
      cy.get(".overlayer").should("not.exist");

      // 2. TEST: Toggle does not have the class active
      cy.get(".hamburger").should("not.have.class", "active");
    });
  });
});
