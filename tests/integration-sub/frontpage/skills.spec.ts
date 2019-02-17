// EXPORT
module.exports = () => {
  // Working variables
  const url = Cypress.env("URL"),
    validateSectionTitle = require("../functions/sectionTitle.spec.ts");

  // SKills
  describe("Skills", () => {
    // A. RUN: Once before all tests in this wrapper
    before(() => {
      // Visit frontpage
      cy.visit(url);

      // Empty out local storage
      cy.clearLocalStorage().then(ls => {
        expect(ls.getItem("skills")).to.be.null;
      });

      // Reload the page
      cy.reload();

      // Scroll down to section
      cy.get("#toolset").scrollIntoView();
    });

    // B. DEFINE: Section title
    describe("Section Title", () => {
      validateSectionTitle("#toolset .section_title", "Toolset");
    });
  });
};
