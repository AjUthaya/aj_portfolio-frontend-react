/// <reference types="Cypress" />

// DEFINE: Host/Domain names
const devHost = "127.0.0.1:6969",
  prodHost = "aj-portfolio.com";

// DEFINE: Full url
const devUrl = `http://${devHost}`,
  prodUrl = `https://www.${prodHost}`;

// DEFINE: Working variables
const host = prodHost,
  url = prodUrl;

// GENERAL
describe("General", () => {
  // PROTOCOL
  describe("Protocol", () => {
    // VALIDATE: That http redirects to https with www.
    describe("HTTP", () => {
      // NON-WWW
      it("Redirect: http://", () => {
        cy.request({ url: `http://${host}`, followRedirect: false }).then(
          res => {
            // VALIDATE: Status code
            expect(res.status).to.eq(301);

            // VALIDATE: Redirect url
            expect(res.redirectedToUrl).to.eq(`${prodUrl}/`);
          }
        );
      });

      // WWW
      it("Redirect: http://www", () => {
        cy.request({ url: `http://www.${host}`, followRedirect: false }).then(
          res => {
            // VALIDATE: Status code
            expect(res.status).to.eq(301);

            // VALIDATE: Redirect url
            expect(res.redirectedToUrl).to.eq(`${prodUrl}/`);
          }
        );
      });
    });

    // HTTPS
    describe("HTTPS", () => {
      // NON-WWW
      it("NON-WWW", () => {
        cy.request({ url: `https://${host}`, followRedirect: false }).then(
          res => {
            // VALIDATE: Status code
            expect(res.status).to.eq(301);

            // VALIDATE: Redirect url
            expect(res.redirectedToUrl).to.eq(`${prodUrl}/`);
          }
        );
      });

      // WWW
      it("WWW", () => {
        cy.request({ url: url, followRedirect: false }).then(res => {
          console.log(res);

          // VALIDATE: Status code
          expect(res.status).to.eq(200);
        });
      });
    });
  });
});
