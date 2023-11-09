import { quoteElements } from '../support/elements/quoteElements';

describe('Validação de CEP para cotação de receitas', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve rejeitar CEPs de regiões não atendidas', () => {
    // CEP do Acre, que não é atendido
    const cepAcre = '69917740';

    // Preenche o formulário com os dados necessários
    // Substitua 'yourName', 'yourEmail', e 'yourPhone' com valores válidos necessários para o teste
    cy.get(quoteElements.nameInput).type('Miecio COsta');
    cy.get(quoteElements.emailInput).type('yourEmail@example.com');
    cy.get(quoteElements.phoneInput).type('11987654321');
    cy.get(quoteElements.fileUploader).attachFile('Documento1.pdf');

    // Preenche o campo CEP com o valor que representa uma região não atendida
    cy.get(quoteElements.cepInput).type(cepAcre);
    cy.get(quoteElements.submitButton).click();

    // Verifica se a mensagem de região não atendida é exibida
    // A mensagem de erro é verificada no contexto da nova página ou modal que é exibido
    cy.contains('h2', 'Que pena. Ainda não atendemos sua região.').should(
      'be.visible',
    );
    cy.contains('Assim que houver disponibilidade, iremos avisar.').should(
      'be.visible',
    );

    // O botão para voltar ao início pode ser verificado e clicado se necessário
    cy.contains('button', 'Voltar ao inicio').should('be.visible').click();
  });
});
