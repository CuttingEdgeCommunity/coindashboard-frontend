describe("User interaction", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it("coin with rank 1 should be visible on the dashboard", () => {
        cy.get(".infinite-scroll:first-child").contains("1")
        cy.get(".infinite-scroll:first-child").contains("Bitcoin")
        cy.get('[data-cy="coin-market-header"] span').contains("Bitcoin")
    })
    /*it("Search a coin, click on it and see dashboard", () => {
        cy.get("#list-coins").should("be.visible")
        cy.get("#simple-email").type("ether")
        cy.get('[data-cy="list-item"] a p').contains("Ethereum").click()
        cy.get('[data-cy="coin-market-header"] span').contains("Ethereum")
        cy.get("#list-coin-info").should("be.visible")
    })*/
    it("Search for an unexisting coin, see the message not found", () => {
        cy.get("#list-coins").should("be.visible")
        cy.get("#simple-email").type("zig")
        cy.get('[data-cy="error-message"] div h3').contains("No result found")
    })
    it("Dark and light mode", () => {
        cy.get("#App.light").should("be.visible")
        cy.get("#modeChange").click()
        cy.get("#App.dark").should("be.visible")
        cy.get("#modeChange").click()
    })
    it("Dark and light mode state stored", () => {
        cy.get("#App.light").should("be.visible")
        cy.get("#modeChange").click()
        cy.get("#App.dark").should("be.visible")
        cy.reload()
        cy.get("#App.dark").should("be.visible")
    })
})
