/// <reference types="Cypress" />

// https://www.gatsbyjs.org/docs/end-to-end-testing/
describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe();
  });

  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
});
