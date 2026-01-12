class userRegistration {

    selectorsList() {
        return {
            registerName: "[name='nome']",
            registerEmail: "[name='email']",
            registerPassword: "[name='password']",
            ButtonField: "[data-testid='cadastrar']",
            AlertSuccess: ".alert-primary",
            AlertError: "[role='alert']"
        }
    }

    registrationFill(name, email, password) {
        cy.get(this.selectorsList().registerName).clear().type(name)
        cy.get(this.selectorsList().registerEmail).clear().type(email)
        cy.get(this.selectorsList().registerPassword).clear().type(password)
    }

    registrationClick() {

        cy.get(this.selectorsList().ButtonField).click()
    }

    registrationCheck() {
        
        cy.get('body').should('contain', 'Cadastro realizado com sucesso')
        cy.get(this.selectorsList().AlertSuccess)

    }

    registrationCheckMessages(messages) {

        const list = Array.isArray(messages) ? messages : [messages]

        cy.get(this.selectorsList().AlertError).eq(0).should('be.visible')
        cy.get(this.selectorsList().AlertError).eq(1).should('be.visible')
        cy.get(this.selectorsList().AlertError).eq(2).should('be.visible')
        
        list.forEach((msg) => {
            cy.get('body').should('contain', msg)
            
        })
    }
}

export default userRegistration