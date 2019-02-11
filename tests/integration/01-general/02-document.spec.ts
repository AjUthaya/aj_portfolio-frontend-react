/// <reference types="Cypress" />

// DEFINE: Working variables
const url = Cypress.env("URL");

describe("Document", () => {
  // 1. RUN: Once before all tests in this wrapper
  before(() => {
    // I. GOTO: Frontpage, give data some time to load
    cy.visit(url).wait(2000);
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
      // I. VALIDATE: Has attribute & not empty
      cy.get('head link[rel="shortcut icon"]')
        .should("have.attr", "href")
        .should("not.be.empty");
    });

    // C. TEST: Role
    it("Role", () => {
      // I. VALIDATE: Value should be main
      cy.get("html").should("have.attr", "role", "main");
    });

    // D. TEST: Language
    it("Language", () => {
      cy.get("html[lang]").should("not.be.empty");
    });

    // E. TEST: Charset
    it("Charset", () => {
      cy.get("head meta[charset]");
    });

    // F. TEST: Viewport
    it("Viewport", () => {
      cy.get("head meta[name=viewport]")
        .should("have.attr", "content")
        .should("not.be.empty");
    });

    // G. TEST: Manifest
    it("Manifest", () => {
      // I. VALIDATE: Link to json manifest
      cy.get("head link[rel=manifest]")
        .should("have.attr", "href")
        .should("not.be.empty");

      // II. VALIDATE: That theme color is set
      cy.get("head meta[name=theme-color]")
        .should("have.attr", "content")
        .should("not.be.empty");
    });
  });

  // 3. DEFINE: SEO tests
  describe("SEO", () => {
    // A. TEST: Description
    it("Description", () => {
      cy.get("head meta[name=description]")
        .should("have.attr", "content")
        .should("not.be.empty");
    });

    // B. TEST: Robots
    it("Robots", () => {
      cy.get("head meta[name=viewport]")
        .should("have.attr", "content")
        .should("not.be.empty");
    });

    // C. TEST: Open Graph
    it("Open Graph", () => {
      // I. Title
      cy.get("head meta[name='og:title']")
        .should("have.attr", "content")
        .should("not.be.empty");

      // II. Description
      cy.get("head meta[name='og:description']")
        .should("have.attr", "content")
        .should("not.be.empty");
    });

    // E. TEST: Twitter
    it("Twitter", () => {
      // I. Title
      cy.get("head meta[name='twitter:title']")
        .should("have.attr", "content")
        .should("not.be.empty");

      // II. Description
      cy.get("head meta[name='twitter:description']")
        .should("have.attr", "content")
        .should("not.be.empty");
    });
  });

  // 4. DEFINE: Image tests
  describe("Images", () => {
    // A. TEST: Alt
    it("Alt & Src & Broken links", () => {
      // I. LOOP: Thorugh all the image elements
      cy.get("img").each(function(element, index, list) {
        cy.wrap(element)
          .should("have.attr", "alt")
          .should("not.be.empty");

        cy.wrap(element)
          .should("have.attr", "src")
          .should("not.be.empty")
          .then(res => {
            // 1. VALIDATE: Image link
            cy.request({ url: res.toString(), followRedirect: false }).then(
              res => {
                // I. VALIDATE: Status code
                expect(res.status).to.eq(200);
              }
            );
          });
      });
    });
  });
});
