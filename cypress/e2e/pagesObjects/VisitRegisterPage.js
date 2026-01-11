class registerVisit {

    selectorsList() {
        return {
            registerButton: "[type='button']",
            checkSection: ".font-robot"
        }
    }

    visitRegister() {
        
        cy.visit('/login')
        cy.get(this.selectorsList().registerButton).click()
    }

    infoSection() {
        cy.location('pathname').should('equal', '/cadastrarusuarios')
        cy.get(this.selectorsList().checkSection).should('be.visible')
    }
}

export default registerVisit