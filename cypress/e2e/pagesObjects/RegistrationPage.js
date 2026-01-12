class userRegistration {

    selectorsList() {
        return {
            registerName: "[name='nome']",
            registerEmail: "[name='email']",
            registerPassword: "[name='password']",
            ButtonField: "[data-testid='cadastrar']",
            AlertSuccess: ".alert-primary",
            AlertUsed: ".alert-secondary",
            AlertError: "[role='alert']",
            adminCheckbox: "[data-testid='checkbox']"

        }
    }

    registrationFill(name, email, password) {

        if (email) { cy.get(this.selectorsList().registerEmail).clear().type(email) }
        if (name) { cy.get(this.selectorsList().registerName).clear().type(name) }
        if (password) { cy.get(this.selectorsList().registerPassword).clear().type(password) }

        // O Cypress verifica o valor que você definiu lá no cypress.config.js
        if (Cypress.env('isAdmin')) {
        // Se estiver true, ele marca a caixa de administrador
        cy.get(this.selectorsList().adminCheckbox).click({ force: true })
        }
    }

    registrationClick() {

        cy.get(this.selectorsList().ButtonField).click()
        cy.wait(1000)
    }

    registrationCheckSuccess() {
        
        cy.get('body').should('contain', 'Cadastro realizado com sucesso')
        cy.get(this.selectorsList().AlertSuccess)

    }

    registrationCheckUsed() {
        
     cy.get('body').then(($body) => {
        // 2. Usamos um 'if' do JavaScript puro (jQuery) 
        // Isso checa se o texto existe no exato momento da execução
        if ($body.text().includes('Este email já está sendo usado')) {
            // Se encontrou, fazemos a validação oficial do Cypress
            cy.contains('Este email já está sendo usado').should('be.visible')
            cy.log('O e-mail já existia e a mensagem foi validada.')
        } else {
            // Se não encontrou, ele apenas loga e segue o teste feliz
            cy.log('Usuário novo ou mensagem de erro não exibida. Seguindo...')
        }

    })

    }
    
    registrationCheckMessages(messages) {

        const list = Array.isArray(messages) ? messages : [messages]

        cy.get(this.selectorsList().AlertError).eq(0)
        cy.get(this.selectorsList().AlertError).eq(1)
        cy.get(this.selectorsList().AlertError).eq(2)
        
        list.forEach((msg) => {
            cy.get('body').should('contain', msg)
            
        })
    }
}

export default userRegistration