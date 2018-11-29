/// <reference types="Cypress" />

// GENERAL
describe("General", () => {
  // PROTOCOL
  describe("Protocol", () => {
    // HTTP
    describe("HTTP", () => {
      // NON-WWW
      it("NON-WWW", () => {
        cy.visit("http://localhost:6969");
      });

      /*
      // WWW
      it("WWW", () => {
        cy.visit("http://www.localhost:6969");
      });
      */
    });

    /*
    // HTTPS
    describe("HTTPS", () => {
      // NON-WWW
      it("NON-WWW", () => {
        cy.visit("https://localhost:6969");
      });

      // WWW
      it("WWW", () => {
        cy.visit("https://www.localhost:6969");
      });
    });
    */
  });
});
