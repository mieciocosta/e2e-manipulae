import { quoteElements } from '../support/elements/quoteElements';
import testData from '../fixtures/testData';

describe('Processo de Cotação de Receitas', () => {
  before(() => {
    cy.log('Dado que o usuário acessa a página de cotação de receitas');
    cy.visit('/');
  });

  it('Quando o usuário preenche o formulário de cotação com dados válidos', () => {
    cy.log('E o usuário preenche o campo de CEP');
    cy.get(quoteElements.cepInput).type(testData.cep);

    cy.log('E o usuário preenche o campo de Email');
    cy.get(quoteElements.emailInput).type(testData.email);

    cy.log('E o usuário preenche o campo de Nome');
    cy.get(quoteElements.nameInput).type(testData.nome);

    cy.log('E o usuário preenche o campo de Celular');
    cy.get(quoteElements.phoneInput).type(testData.celular);
  });

  it('E o usuário envia o formulário de cotação', () => {
    cy.log('Então o usuário clica no botão de enviar receita');
    cy.get(quoteElements.submitButton).click();
  });

  it('Então a cotação de receita é enviada com sucesso', () => {
    cy.log('E o usuário vê uma mensagem de confirmação de envio');
    // Aqui você adicionaria a verificação da mensagem de sucesso
    // Por exemplo: cy.get(seletorDaMensagemDeSucesso).should('contain', 'Receita enviada com sucesso');
  });
});
