class DashboardPage {

    selectorsList() {
       return { 
       
       dashBoard:".container-fluid",
        
        }
    }
       DashBoardCheck() {

        cy.location('pathname').should('equal', '/home')
        cy.get(this.selectorsList().dashBoard).should('be.visible')

        }    
    }

    export default DashboardPage
