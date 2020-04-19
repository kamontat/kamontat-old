/// <reference types="Cypress" />

// eslint-disable-next-line @typescript-eslint/no-var-requires
const constants = require("./constants");

// https://www.gatsbyjs.org/docs/end-to-end-testing/
describe("Information page", () => {
  beforeEach(() => {
    cy.visit("/information").get(constants.id).injectAxe();
  });

  it("Should load the correct URL path", function () {
    cy.url().should("contain", "/information");
  });

  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y(constants.id);
  });
});
