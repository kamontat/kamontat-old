/// <reference types="Cypress" />

// https://www.gatsbyjs.org/docs/end-to-end-testing/
describe("Information page", () => {
  beforeEach(() => {
    cy.visit("/information").get("main").injectAxe();
  });

  it("Should load the correct URL path", function () {
    cy.url().should("contain", "/information");
  });

  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y(`div[id="___gatsby"]`);
  });
});
