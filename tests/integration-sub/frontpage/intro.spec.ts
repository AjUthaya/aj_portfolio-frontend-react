// EXPORT
module.exports = () => {
  // Working variables
  const url = Cypress.env("URL");

  // Intro
  describe("Intro", () => {
    // A. RUN: Once before all tests in this wrapper
    before(() => {
      // I. GOTO: Frontpage, give data some time to load
      cy.visit(url).wait(2000);

      // II. GOTO: Scroll down to section
      cy.get("#intro").scrollIntoView();
    });

    // B. DEFINE: Intro text
    describe("Title", () => {
      // I. TEST: Contains Aj
      it("Contains Aj", () => {
        cy.get(".intro__wrapper__text__name").should("contain", "Aj");
      });
    });

    // C. DEFINE: Contact links
    describe("Contact links", () => {
      // I. TEST: Github link
      it("Github", () => {
        cy.get("[aria-label='Github']")
          .should("have.attr", "href")
          .then(res => {
            // 1. VALIDATE: Link
            cy.request({ url: res.toString() }).then(res => {
              expect(res.status).to.eq(200);
            });
          });
      });

      // II. TEST: Codepen link
      it("Codepen", () => {
        cy.get("[aria-label='Codepen']")
          .should("have.attr", "href")
          .then(res => {
            // 1. VALIDATE: Link
            cy.request({ url: res.toString() }).then(res => {
              expect(res.status).to.eq(200);
            });
          });
      });

      // III. TEST: Email
      it("Email", () => {
        cy.get("[aria-label='Email']")
          .should("have.attr", "href")
          .then(res => {
            // 1. VALIDATE: That the link contains "mailto:"
            expect(res).to.contain("mailto:");

            // 2. VALIDATE: That the link contains my email
            expect(res).to.contain("ajanth160899@gmail.com");
          });
      });

      // IIII. TEST: Phone
      it("Phone", () => {
        cy.get("[aria-label='Phone']")
          .should("have.attr", "href")
          .then(res => {
            // 1. VALIDATE: That the link contains "mailto:"
            expect(res).to.contain("tel:");

            // 2. VALIDATE: That the link contains my email
            expect(res).to.contain("+4746150178");
          });
      });
    });
  });
};
