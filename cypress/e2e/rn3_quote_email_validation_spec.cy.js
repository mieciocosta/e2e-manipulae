import { quoteElements } from '../support/elements/quoteElements';

describe('Validação do campo Email para cotação de receitas', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve validar que o campo Email aceita apenas um email válido', () => {
    // Teste para e-mail sem o caracter "@"
    cy.get(quoteElements.emailInput).type('emailsemarroba.com');
    cy.get(quoteElements.submitButton).click();

    // Teste para e-mail sem caracteres antes do "@"
    cy.get(quoteElements.emailInput).clear().type('@dominio.com');
    cy.get(quoteElements.submitButton).click();

    // Teste para e-mail sem caracteres após o "@"
    cy.get(quoteElements.emailInput).clear().type('email@');
    cy.get(quoteElements.submitButton).click();

    // Teste para e-mail sem ponto no domínio
    cy.get(quoteElements.emailInput).clear().type('email@dominio');
    cy.get(quoteElements.submitButton).click();

    // Teste para e-mail sem caracteres após o ponto no domínio
    cy.get(quoteElements.emailInput).clear().type('email@dominio.');
    cy.get(quoteElements.submitButton).click();

    cy.contains('Verifique se o email está correto').should('be.visible');
  });
});
