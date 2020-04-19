/// <reference types="Cypress" />

// https://www.gatsbyjs.org/docs/end-to-end-testing/
describe("Information page", () => {
  beforeEach(() => {
    cy.visit("/debug").get("main").injectAxe();
  });

  it("Should load the correct URL path", function () {
    cy.url().should("contain", "/debug");
  });

  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
});
