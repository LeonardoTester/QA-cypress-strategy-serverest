class BuyStore {

    selectorsList() {
        return {

            buyField: "[data-testid='adicionarNaLista']",
            buyIncrease: "[data-testid='product-increase-quantity']",
            addCart: "[data-testid='adicionar carrinho']"


        }
    }

    buyList() {
        
      cy.get(this.selectorsList().buyField).first().click()
      cy.get(this.selectorsList().buyIncrease).click()
      cy.get(this.selectorsList().addCart).click()

    }
    DashBoardCard() {
    
    cy.location('pathname').should('equal', '/carrinho')
    
    }

}

export default BuyStore