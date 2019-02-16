module.exports = () => {
  // Working variables
  const url = Cypress.env("URL");

  // Navigation
  describe("Navigation", () => {
    // A. RUN: Once before all tests in this wrapper
    before(() => {
      // I. GOTO: Frontpage, give data some time to load
      cy.visit(url);
    });

    // B. DEFINE: Logo
    describe("Logo", () => {
      // I. TEST: SVG
      it("SVG element is not empty", () => {
        cy.get(".navigation__header__right__logo_link__image_container__image")
          .children()
          .should("have.length.gte", 2);
      });

      // II. TEST: Click
      it("OnClick: Change background color", () => {});

      // III. TEST: Link
      it("Links to homepage", () => {
        cy.get(".navigation__header__right__logo_link")
          .should("have.attr", "href")
          .and("include", "/");
      });
    });

    // C. DEFINE: Menu
    describe("Menu", () => {
      // I. TEST: Only one active item
      it("Only one active menu item", () => {
        cy.get(".navigation__menu__list__item.active").should("have.length", 1);
      });

      // III. TEST: All items have SVG's that are not empty
      it("All menu items have SVG's", () => {
        cy.get(".navigation__menu__list__item")
          .its("length")
          .then(size => {
            cy.get(".navigation__menu__list__item__icon_container__icon")
              .should("have.length", size)
              .children()
              .should("have.length.gte", 1);
          });
      });
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
};
