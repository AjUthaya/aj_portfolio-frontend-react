// EXPORT
module.exports = () => {
  // Working variables
  const url = Cypress.env("URL"),
    validateSectionTitle = require("../functions/sectionTitle.spec.ts");

  // Projects
  describe("Projects", () => {
    // A. RUN: Once before all tests in this wrapper
    before(() => {
      // Empty out local storage
      cy.clearLocalStorage().then(ls => {
        expect(ls.getItem("projects")).to.be.null;
      });

      // Visit frontpage
      cy.visit(url);

      // Scroll down to section
      cy.get("#projects").scrollIntoView();
    });

    // B. DEFINE: Section title
    describe("Section Title", () => {
      validateSectionTitle("#projects .section_title", "Projects");
    });

    // C. DEFINE: Items
    describe("Items", () => {
      // I. DEFINE: Variable to store elements
      const elements = new Array();

      // II. TEST: Get all the elements
      it("Get all the items", () => {
        cy.get(".projects__list .projects__list__item").each(res => {
          elements.push(res);
        });
      });

      // III. TEST: Filter
      it("Filter", () => {
        cy.get(".projects__list .projects__list__item").each(res => {
          elements.push(res);
        });
      });
    });
  });
};
