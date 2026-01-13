# 🚀 Automação E2E - ServeRest com Cypress

Este projeto consiste em uma suíte de testes automatizados de ponta a ponta para a plataforma **ServeRest**. O foco é validar fluxos críticos de **Login**, **Cadastro de Usuários** e **Processo de Compras**, utilizando o padrão **Page Object Model (POM)**.

---

## 📂 Arquitetura e Estrutura do Projeto

A organização foi pensada para separar a lógica de negócio dos scripts de teste, facilitando a manutenção e garantindo escalabilidade:

* **`cypress/e2e/specs/`**: Contém as especificações de teste divididas por contextos (Login e Registro).
* **`cypress/pagesObjects/`**: Encapsula todos os seletores e interações com a interface.
* **`cypress/fixtures/`**: Gerencia a massa de dados, separando informações fixas de dados dinâmicos.

---

## 🧪 Funcionalidades e Diferenciais Técnicos

### 1. Gestão Dinâmica de Dados (Fixtures)
Diferente de testes com dados estáticos, este projeto utiliza **JavaScript dinâmico nas Fixtures** para garantir independência em cada execução:
* **E-mails Únicos**: Uso de `` `teste${Date.now()}@email.com` `` para evitar falhas por "E-mail já cadastrado".
* **Nomes Randômicos**: Uso de `Math.random()` para criar usuários variados automaticamente.

### 2. Validações Inteligentes (Page Objects)
* **Lógica Condicional**: No cadastro, o sistema verifica se o e-mail já existe sem interromper o fluxo do teste.
* **Fluxo de Compra Completo**: Automação que realiza login, navega no Dashboard, aumenta quantidade de produtos e valida o redirecionamento para o carrinho.
* **Variáveis de Ambiente**: Suporte para definir perfis (Admin ou comum) via `Cypress.env('isAdmin')`.

---

## 🤖 Pipeline de CI (GitHub Actions)

O projeto está integrado ao **GitHub Actions**, garantindo que todos os testes sejam executados automaticamente a cada `push`.



**Destaques da Automação:**
* **Ambiente Isolado**: Execução no `ubuntu-latest` com Node.js v20.
* **Instalação Segura**: Uso de `npm ci` para garantir que as versões das dependências sejam idênticas às de desenvolvimento.
* **Geração de Artefatos**: O sistema está configurado para salvar **screenshots e vídeos** de todas as execuções (mesmo em caso de falha), permitindo auditoria visual rápida pelo console do GitHub.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
* Node.js instalado.

### Passo a Passo para Execução:

```bash
# 1. Clonar o repositório
git clone [https://github.com/LeonardoTester/QA-cypress-strategy-serverest.git]

# 2. Entrar na pasta e instalar as dependências
npm install

# 3. Abrir a interface visual do Cypress
npx cypress open

# 4. Executar os testes em modo Headless (Terminal)
npx cypress run

---

### 🛠️ Melhores Práticas Aplicadas

Tratamento de Erros: Validação de mensagens de alerta obrigatórias e alertas de credenciais inválidas.

Evidências de Teste: Gravação de vídeo e capturas de tela configuradas no pipeline.