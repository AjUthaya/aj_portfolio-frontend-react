module.exports = (identifier = "", value = "") => {
  // I. TEST: Title
  it("Title", () => {
    cy.get(identifier)
      .children(".section_title__title")
      .invoke("text")
      .should("not.be.empty")
      .and("eq", value);
  });

  // II. TEST: Underline
  it("Underline", () => {
    cy.get(identifier)
      .children(".section_title__underline")
      .should("have.css", "height", "4px");
  });
};
