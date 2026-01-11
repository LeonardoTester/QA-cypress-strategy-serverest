class userRegistration {

    selectorsList() {
        return {
            registerName: "[name='nome']",
            registerEmail: "[name='email']",
            registerPassword: "[name='password']",
            ButtonField: "[data-testid='cadastrar']",
            AlertSuccess: ".alert-primary"
        }
    }

    registrationFill(name, email, password) {
        cy.get(this.selectorsList().registerName).click().type(name)
        cy.get(this.selectorsList().registerEmail).click().type(email)
        cy.get(this.selectorsList().registerPassword).click().type(password)
    }

    registrationClick() {

        cy.get(this.selectorsList().ButtonField).click()
    }

    registrationCheck() {
        
        cy.get('body').should('contain', 'Cadastro realizado com sucesso')
    }
}

export default userRegistration