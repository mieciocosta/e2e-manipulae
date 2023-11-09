import { quoteElements } from '../support/elements/quoteElements';

describe('Validação de envio de receitas duplicadas', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Não deve permitir o envio da mesma receita duas vezes', () => {
    const cep = '01001000';
    const email = 'test@example.com';
    const nome = 'Teste da Silva';
    const celular = '11987654321';

    cy.get(quoteElements.cepInput).type(cep);
    cy.get(quoteElements.emailInput).type(email);
    cy.get(quoteElements.nameInput).type(nome);
    cy.get(quoteElements.phoneInput).type(celular);

    // Primeira tentativa de envio
    cy.get(quoteElements.fileUploader).attachFile('Documento1.pdf');
    cy.get(quoteElements.submitButton).click();

    cy.get(quoteElements.cepInput).type(cep);
    cy.get(quoteElements.emailInput).type(email);
    cy.get(quoteElements.nameInput).type(nome);
    cy.get(quoteElements.phoneInput).type(celular);

    // Segunda tentativa de envio do mesmo arquivo
    cy.get(quoteElements.fileUploader).attachFile('Documento1.pdf');
    cy.get(quoteElements.submitButton).click();
  });
});
