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
        cy.get(".projects__list .projects__list__item", {
          timeout: 10000
        }).each(res => {
          elements.push(res);
        });
      });

      // III. TEST: Required values
      it("Required values", () => {
        for (const item of elements) {
          // 1. VALIDATE: Icon
          cy.wrap(item)
            .find(".projects__list__item__content__icon_container__icon")
            .should("have.attr", "src")
            .and("not.be.empty");

          // 2. VALIDATE: Image
          cy.wrap(item)
            .find(".projects__list__item__content__image_container__image")
            .should("have.attr", "src")
            .and("not.be.empty");

          // 3. VALIDATE: Company title
          cy.wrap(item)
            .find(".projects__list__item__content__overlayer__title__label")
            .invoke("text")
            .should("not.be.empty");

          // 4. VALIDATE: Skills
          cy.wrap(item)
            .find(
              ".projects__list__item__content__overlayer__tools .projects__list__item__content__overlayer__tools__item"
            )
            .invoke("text")
            .should("not.be.empty");

          // 5. VALIDATE: Title
          cy.wrap(item)
            .find(".projects__list__item__header__title__label")
            .invoke("text")
            .should("not.be.empty");

          // 6. VALIDATE: Categories
          cy.wrap(item)
            .find(
              ".projects__list__item__header__sub_title__label .projects__list__item__header__sub_title__label__link"
            )
            .invoke("text")
            .should("not.be.empty");
        }
      });

      // V. TEST: Filter
      it("Filter", () => {
        cy.get(".projects__filter");
      });
    });
  });
};
