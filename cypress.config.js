const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
  },

  // 
  env: {
    isAdmin: false // Altere para false para desativar em todos os testes de uma vez
  }
});