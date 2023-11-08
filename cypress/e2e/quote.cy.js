// quote_spec.cy.js
import { quoteElements } from '../support/elements/quoteElements';

describe('Cotação de Receitas', () => {
  before(() => {
    cy.visit('/');
  });

  it('deve preencher o formulário e enviar uma receita', () => {
    // Carrega os dados de ambiente
    const cep = Cypress.env('cep');
    const email = Cypress.env('email');
    const nome = Cypress.env('nome');
    const celular = Cypress.env('celular');

    cy.get(quoteElements.cepInput).type(cep);
    cy.get(quoteElements.emailInput).type(email);
    cy.get(quoteElements.nameInput).type(nome);
    cy.get(quoteElements.phoneInput).type(celular);

  });
});
