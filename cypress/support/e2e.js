// Importando os comandos customizados
import './commands';

// Definindo um gancho global beforeEach para visitar a baseUrl antes de cada teste
beforeEach(() => {
  cy.visit('/'); // Visita a baseUrl definida no cypress.config.js
});
