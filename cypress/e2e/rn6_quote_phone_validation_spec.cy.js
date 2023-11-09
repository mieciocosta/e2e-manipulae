import { quoteElements } from '../support/elements/quoteElements';

describe('Validação do campo Celular para cotação de receitas', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve validar que o campo Celular aceita apenas um número com 11 dígitos', () => {
    // Teste para celular com menos de 11 dígitos
    cy.get(quoteElements.phoneInput).type('119876543');
    cy.get(quoteElements.submitButton).click();
    cy.contains('Digite pelo menos 10 dígitos').should('be.visible');

    // Teste para celular com mais de 11 dígitos
    cy.get(quoteElements.phoneInput).clear().type('119876543210');
    cy.get(quoteElements.submitButton).click();

    // Teste para celular com caracteres não numéricos
    cy.get(quoteElements.phoneInput).clear().type('1198765432a');
    cy.get(quoteElements.submitButton).click();

    // Teste para celular válido
    cy.get(quoteElements.phoneInput).clear().type('11987654321');
    cy.get(quoteElements.submitButton).click();
    cy.contains('O Celular deve ser numérico').should('not.exist');
    cy.contains('O Celular deve conter 11 dígitos').should('not.exist');
  });
});
