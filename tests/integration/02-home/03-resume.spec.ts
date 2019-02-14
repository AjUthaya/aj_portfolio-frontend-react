/// <reference types="Cypress" />

// Working variables
const url = Cypress.env("URL");

// SKills
describe("Resume", () => {
  // A. RUN: Once before all tests in this wrapper
  before(() => {
    // I. GOTO: Frontpage, give data some time to load
    cy.visit(url).wait(2000);
  });

  // B. DEFINE: Section title
  describe("Section Title", () => {
    // I. TEST: Has section title container
    it("Has the container class", () => {
      cy.get("#resume .section_title");
    });

    // I. TEST: Title
    it("Title", () => {
      cy.get("#resume .section_title__title").should("contain", "Resume");
    });

    // II. TEST: Underline
    it("Underline", () => {
      cy.get("#resume .section_title__underline").should(
        "have.css",
        "height",
        "4px"
      );
    });
  });

  // C. DEFINE: Map data
  describe("Map data", () => {
    // I. TEST: All required values are present
    it("Required value", () => {});

    // II. TEST: Maps properly
    it("Maps properly", () => {});
  });
});
