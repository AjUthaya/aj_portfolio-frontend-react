// EXPORT
module.exports = () => {
  // Working variables
  const url = Cypress.env("URL");

  // SKills
  describe("Resume", () => {
    // A. RUN: Once before all tests in this wrapper
    before(() => {
      // I. GOTO: Frontpage, give data some time to load
      cy.visit(url).wait(2000);

      // II. GOTO: Scroll down to section
      cy.get("#resume").scrollIntoView();
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

    // C. DEFINE: Items
    describe("Items", () => {
      // I. TEST: All required values are present
      it("Required values", () => {});

      // II. TEST: Maps properly
      it("Maps properly", () => {});
    });
  });
};
