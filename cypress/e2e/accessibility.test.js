/// <reference types="Cypress" />

// https://www.gatsbyjs.org/docs/end-to-end-testing/
describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.injectAxe();
  });

  it("Should load the correct URL", function () {
    cy.url().should("eq", "http://localhost:9000/");
  });

  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y(`div[id="___gatsby"]`);
  });
});
