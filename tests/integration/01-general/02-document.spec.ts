/// <reference types="Cypress" />

const config = require("../../../src/local");

// DEFINE: Working variables
const url = config.portfolio.url;

describe("Document", () => {
  // 1. RUN: Once before all tests in this wrapper
  before(() => {
    // I. GOTO: Frontpage
    cy.visit(url);
  });

  // 2. DEFINE: Basic tests
  describe("Basics", () => {
    // A. TEST: Title
    it("Title", () => {
      // I. VALIDATE: Not empty
      cy.title().should("not.be.empty");
    });

    // B. TEST: Icon
    it("Icon", () => {
      // II. VALIDATE: Has attribute & not empty
      cy.get('head link[rel="shortcut icon"]')
        .should("have.attr", "href")
        .should("not.be.empty");
    });

    // C. TEST: Role
    it("Role", () => {
      // II. VALIDATE: Set as main
      cy.get("html").should("have.attr", "role", "main");
    });

    // D. TEST: Lang
    it("Role", () => {
      // II. VALIDATE: Not empty
      cy.get("html[lang]").should("not.be.empty");
    });
  });

  // 3. DEFINE: SEO tests
  describe("SEO", () => {
    // A. TEST: Description
    it("Description", () => {});

    // B. TEST: Keywords
    it("Keywords", () => {});

    // C. TEST: Robots
    it("Robots", () => {});

    // D. TEST: Open Graph
    it("Open Graph", () => {});

    // E. TEST: Twitter
    it("Twitter", () => {});
  });

  // 4. DEFINE: Image tests
  describe("Images", () => {
    // A. TEST: Alt
    it("Alt", () => {});

    // B. TEST: Src
    it("Src", () => {});
  });

  // 5. DEFINE: Links tests
  describe("Links", () => {
    // A. TEST: Has aria-label on external links
    it("Aria label", () => {});
  });

  // 6. DEFINE: Lists tests
  describe("Lists", () => {
    // A. TEST: Only li tags
    it("Only li tags", () => {});
  });
});
