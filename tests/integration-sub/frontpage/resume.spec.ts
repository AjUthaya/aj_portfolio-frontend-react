// EXPORT
module.exports = () => {
  // Working variables
  const url = Cypress.env("URL"),
    validateSectionTitle = require("../functions/sectionTitle.spec.ts");

  // SKills
  describe("Resume", () => {
    // A. RUN: Once before all tests in this wrapper
    before(() => {
      // Visit frontpage
      cy.visit(url);

      // Empty out local storage
      cy.clearLocalStorage().then(ls => {
        expect(ls.getItem("resume")).to.be.null;
      });

      // Reload the page
      //cy.reload();

      // Scroll down to section
      cy.get("#resume").scrollIntoView();
    });

    // B. DEFINE: Section title
    describe("Section Title", () => {
      validateSectionTitle("#resume .section_title", "Resume");
    });

    // C. DEFINE: Items
    describe("Items", () => {
      // I. DEFINE: Variable to store elements
      const elements = new Array();

      // II. TEST: Get all the elements
      it("Get all the items", () => {
        cy.get(".accordion__list .accordion__list__item").each(res => {
          elements.push(res);
        });
      });

      // III. TEST: Required values
      it("Required values", () => {
        for (const item of elements) {
          // 1. VALIDATE: Icon
          cy.wrap(item)
            .find(".accordion__list__item__preview__image_container__image")
            .should("have.attr", "src")
            .and("not.be.empty");

          // 2. VALIDATE: Title
          cy.wrap(item)
            .find(".accordion__list__item__preview__title_container__title")
            .invoke("text")
            .should("not.be.empty");

          // 3. VALIDATE: Sub title
          cy.wrap(item)
            .find(".accordion__list__item__preview__title_container__sub_title")
            .invoke("text")
            .should("not.be.empty");

          // 4. VALIDATE: Date
          cy.wrap(item)
            .find(".accordion__list__item__preview__date_container__date")
            .invoke("text")
            .should("not.be.empty");
        }
      });
    });
  });
};
