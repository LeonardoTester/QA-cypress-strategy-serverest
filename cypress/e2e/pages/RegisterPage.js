class RegisterPage {

    selectorsList() {
     const selectors = {
       
        RegisterButton: "[type='button']",
        CheckSection: ".font-robot"
        
        }         
            return selectors
        }
      
        VisitRegister() {

         cy.visit('/login')
         cy.get(this.selectorsList().RegisterButton).click()
         
        }

        InfoSection() {

        cy.location('pathname').should('equal', '/cadastrarusuarios')
        cy.get(this.selectorsList().CheckSection).should('be.visible')

        }
    }

    export default RegisterPage
