/// <reference types="Cypress" />

// eslint-disable-next-line @typescript-eslint/no-var-requires
const constants = require("./constants");

// https://www.gatsbyjs.org/docs/end-to-end-testing/
describe("Index page", () => {
  beforeEach(() => {
    cy.visit("/").get(constants.id).injectAxe();
  });

  it("Should load the correct URL", function () {
    cy.url().should("contain", "http://");
    cy.url().should("contain", "localhost");
  });

  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y(constants.id);
  });
});
