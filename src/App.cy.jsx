import App from "./App"

describe("Application head", () => {
    it("dark and light Mode", () => {
        cy.mount(<App />)
        cy.get(".dark").should("be.visible")
        cy.get("#modeChnage").click()
        cy.get(".light").should("be.visible")
    })
})
