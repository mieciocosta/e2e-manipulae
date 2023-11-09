import { quoteElements } from '../support/elements/quoteElements';

describe('Validação do campo Nome para cotação de receitas', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve validar as regras do campo Nome', () => {
    // Teste para nome sem sobrenome
    cy.get(quoteElements.nameInput).type('Nome');
    cy.get(quoteElements.submitButton).click();
    cy.contains('Informe o nome e sobrenome').should('be.visible');

    // Teste para nome e sobrenome com menos caracteres que o necessário
    cy.get(quoteElements.nameInput).clear().type('No So');
    cy.get(quoteElements.submitButton).click();
    cy.contains(
      'Nome precisa ter no mínimo 3 caracteres e sobrenome no mínimo 2 caracteres',
    ).should('be.visible');

    // Teste para caracteres inválidos no nome
    cy.get(quoteElements.nameInput).clear().type('Nome123 !@#');
    cy.get(quoteElements.submitButton).click();
    cy.contains(
      'Não é permitido informar caracteres especiais e números',
    ).should('be.visible');
  });
});
