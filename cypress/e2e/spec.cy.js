describe("User interaction", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "http://localhost:3001/api/coins", {
      fixture: "coins.json",
    }).as("getCoinsList");
    cy.intercept("GET", "http://localhost:3001/api/coins/Ethereum", {
      fixture: "coinInfo.json",
    }).as("getCoinInfo");
    cy.intercept("GET", "http://localhost:3001/api/coins/Ethereum/chart", {
      fixture: "chart.json",
    }).as("getCoinChart");
    cy.intercept("GET", "http://localhost:3001/api/coins/Ethereum/marketdata", {
      fixture: "marketdata.json",
    }).as("getCoinMarketdata");
    cy.intercept("GET", "http://localhost:3001/api/coins/Bitcoin/marketdata", {
      fixture: "bitcoinInfo.json",
    }).as("getCoinMarketdataBitcoin");
  });
  it("coin with rank 1 should be visible on the dashboard", () => {
    cy.get(".infinite-scroll:first-child").contains("1");
    cy.get(".infinite-scroll:first-child").contains("Bitcoin");
    cy.get('[data-cy="coin-market-header"] span').contains("Bitcoin");
  });
  it("Search a coin, click on it and see dashboard", () => {
    cy.get("#list-coins").should("be.visible");
    cy.get("#simple-email").type("Ethereum");
    cy.get('[data-cy="list-item"]').contains("Ethereum").click();
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
