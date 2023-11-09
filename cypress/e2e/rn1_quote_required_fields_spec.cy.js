import { quoteElements } from '../support/elements/quoteElements';

describe('Validação de campos obrigatórios para cotação de receitas', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve validar que os campos Receita, CEP, Email, Nome e Celular são obrigatórios', () => {
    // Simula o envio do formulário sem preencher qualquer campo
    cy.get(quoteElements.submitButton).click();

    // Verifica a mensagem de erro para o carregamento da receita
    cy.contains('Envie pelo menos uma receita').should('be.visible');

    // Verifica a mensagem de erro para o campo CEP
    cy.contains('Campo Obrigatorio').should('be.visible');

    // Verifica a mensagem de erro para o campo Email
    cy.contains('Campo Obrigatório').should('be.visible');

    // Verifica a mensagem de erro para o campo Nome
    cy.contains('Campo Obrigatório').should('be.visible');

    // Verifica a mensagem de erro para o campo Celular
    cy.contains('Campo Obrigatório').should('be.visible');
  });
});
