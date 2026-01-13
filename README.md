# 🚀 Automação E2E - ServeRest com Cypress

Este projeto contém uma suíte de testes automatizados para a plataforma **ServeRest**, cobrindo os fluxos de cadastro de usuários, autenticação e processo de compra. O projeto utiliza o padrão de projeto **Page Object Model (POM)** para garantir um código limpo e de fácil manutenção.

## 📂 Estrutura do Projeto

A organização das pastas foi pensada para separar a lógica de teste dos seletores e dados:

* **`cypress/e2e/specs/`**: Contém os arquivos de teste (`.cy.js`).
* **`cypress/pagesObjects/`**: Contém as classes com a lógica de cada página.
* **`cypress/fixtures/`**: Contém as massas de dados dinâmicas para os testes.

## 🏗️ Arquitetura (Page Objects)

Para facilitar a manutenção, o projeto utiliza as seguintes classes:

1.  **`LoginPage`**: Gerencia a interação com os campos de e-mail, senha e botão de entrar.
2.  **`RegistrationPage`**: Lógica para preenchimento de formulário de novos usuários, com suporte para checkbox de administrador.
3.  **`BuyStore`**: Automação das ações de selecionar produto, aumentar quantidade e adicionar ao carrinho.
4.  **`VisitRegisterPage` & `dashBoardLogin`**: Gerenciam as navegações e as verificações de URL e elementos de interface após ações.

## 📊 Gerenciamento de Dados

O projeto utiliza **Data-Driven Testing** com arquivos JavaScript nas fixtures:
* **Geração de dados únicos**: Utilizamos `Date.now()` e `Math.random()` para criar e-mails e nomes aleatórios em tempo real. Isso evita que os testes de cadastro falhem por "usuário já existente" em execuções repetidas.

### 🚀 Como rodar os testes

### Pré-requisitos
* Node.js instalado.

## Instalação e Execução:

```bash
 1. Instalar dependências
npm install

 2. Abrir Cypress (Interface)
npx cypress open

 3. Rodar Testes (Terminal)
npx cypress run

```
## 🛠️ Melhores Práticas Aplicadas
- **Seletores Dinâmicos**: Uso de `data-testid` para seletores mais estáveis.
- **Tratamento Condicional**: Verificação inteligente se o e-mail já está em uso sem interromper o fluxo do teste.
- **Configurações Globais**: Verificação de variáveis de ambiente para definir perfis de usuário (Admin).

   