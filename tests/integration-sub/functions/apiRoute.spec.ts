module.exports = (url = "", method = "GET") => {
  // I. DEFINE: Variable to store data
  let data = {};

  // II. Get response
  it("Get response", () => {
    cy.request({ url: url, method: method }).then(res => {
      data = res;
    });
  });

  // III. Status is 200
  it("Status is 200", () => {
    cy.wrap(data)
      .its("status")
      .should("eq", 200);
  });

  // III. Format is JSON
  it("Format is JSON", () => {
    cy.wrap(data)
      .its("status")
      .should("eq", 200);
  });

  // IIII. Body is an array
  it("Data is not empty", () => {
    cy.wrap(data)
      .its("body")
      .should("not.be.empty")
      .and("be.a", "array");
  });
};
