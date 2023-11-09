import { quoteElements } from '../support/elements/quoteElements';

describe('Validação do campo CEP para cotação de receitas', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve validar que o campo CEP aceita apenas um número com 8 dígitos', () => {
    // Teste para CEP com menos de 8 dígitos
    cy.get(quoteElements.cepInput).type('1234567');
    cy.get(quoteElements.submitButton).click();
    cy.contains('insira 8 dígitos').should('be.visible');

    // Teste para CEP com mais de 8 dígitos
    cy.get(quoteElements.cepInput).clear().type('123456789');
    cy.get(quoteElements.submitButton).click();
    cy.contains('Cep invalido').should('be.visible');

    // Teste para CEP com caracteres não numéricos
    cy.get(quoteElements.cepInput).clear().type('1234abcd');
    cy.get(quoteElements.submitButton).click();
    cy.contains('insira 8 dígitos').should('be.visible');

    // Teste para CEP válido
    cy.get(quoteElements.cepInput).clear().type('12345678');
    cy.get(quoteElements.submitButton).click();
    cy.contains('O CEP deve ser numérico').should('not.exist');
    cy.contains('O CEP deve conter 8 dígitos').should('not.exist');
  });
});
