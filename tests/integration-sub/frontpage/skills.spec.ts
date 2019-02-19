// EXPORT
module.exports = () => {
  // Working variables
  const url = Cypress.env("URL"),
    validateSectionTitle = require("../functions/sectionTitle.spec.ts");

  // SKills
  describe("Skills", () => {
    // A. RUN: Once before all tests in this wrapper
    before(() => {
      // Empty out local storage
      cy.clearLocalStorage().then(ls => {
        expect(ls.getItem("skills")).to.be.null;
      });

      // Visit frontpage
      cy.visit(url);

      // Scroll down to section
      cy.get("#toolset").scrollIntoView();
    });

    // B. DEFINE: Section title
    describe("Section Title", () => {
      validateSectionTitle("#toolset .section_title", "Toolset");
    });

    // C. DEFINE: Items
    describe("Items", () => {
      // I. DEFINE: Variable to store elements
      const elements = new Array();

      // II. TEST: Get all the elements
      it("Get all the items", () => {
        cy.wait(3000);
        cy.get(".mini_boxes__list .mini_boxes__list__item").each(res => {
          elements.push(res);
        });
      });

      // III. TEST: Required values
      it("Required values", () => {
        for (const item of elements) {
          // 1. VALIDATE: Icon
          cy.wrap(item)
            .find(".mini_boxes__list__item__image_container__image")
            .should("have.attr", "src")
            .and("not.be.empty");

          // 2. VALIDATE: Title
          cy.wrap(item)
            .find(".mini_boxes__list__item__title_container__title")
            .invoke("text")
            .should("not.be.empty");
        }
      });
    });
  });
};
