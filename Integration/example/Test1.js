/// <reference types="cypress" />

describe("My First Test Suite", () => {
  it("My first test case", function () {
    cy.visit("https://www.cypress.io/");
  });
});
