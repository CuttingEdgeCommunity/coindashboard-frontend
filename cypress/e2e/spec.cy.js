describe("User interaction", () => {
  beforeEach(() => {
    cy.visit("http://localhost:80");
  });
  it("coin with rank 1 should be visible on the dashboard", () => {
    cy.get(".infinite-scroll:first-child").contains("1");
    cy.get(".infinite-scroll:first-child").contains("Bitcoin");
    cy.get('[data-cy="coin-market-header"] span').contains("Bitcoin");
  });
  it("Search a coin, click on it and see dashboard", () => {
    cy.get("#list-coins").should("be.visible");
    cy.get("#simple-email").type("Ethereum");
    cy.get('[data-cy="list-item"] a p').contains("Ethereum").click();
    cy.get('[data-cy="coin-market-header"] span').contains("Ethereum");
    cy.get("#list-coin-info").should("be.visible");
  });
  it("Dark and light mode", () => {
    cy.get("#App.dark").should("be.visible");
    cy.get("#modeChnage").click();
    cy.get("#App.light").should("be.visible");
    cy.get("#modeChnage").click();
  });
});
