class LoginVisit {

    selectorsList() {
        return {

            usernameField: "[data-testid='email']",
            passwordField: "[data-testid='senha']",
            loginButton: '[data-testid="entrar"]',
            wrongCredentialAlert: "[role='alert']",
            dashBoard:".container-fluid",

            
             
        }
    }

    visitLogin() {
        
        cy.visit('/login')

    }

    loginWithUser(usarname, password) {

        cy.get(this.selectorsList().usernameField).type(usarname)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().dashBoard)

    }

    AlertErrorLogin() {
        
        cy.get(this.selectorsList().wrongCredentialAlert)
        cy.get('body').should('contain', 'Email e/ou senha inválidos')

    }
    
}

export default LoginVisit