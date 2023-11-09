# Teste Manual da Feature "Cotar"

## Introdução

Este documento descreve os cenários de teste manual para a feature "Cotar" da plataforma Manipulaê. Os cenários estão baseados nas regras de negócio fornecidas (RN1 a RN7) e seguem a metodologia BDD.

## Cenários de Teste

### Cenário: Submissão de Formulário com Campos Obrigatórios (RN1)

**Dado** que estou na página de cotação de receitas
**Quando** eu preencher todos os campos obrigatórios (Receita, CEP, Email, Nome, Celular)
**E** enviar o formulário
**Então** devo receber uma confirmação de que minha receita foi submetida com sucesso

### Cenário: Validação do Campo Nome (RN2)

**Dado** que estou na página de cotação de receitas
**Quando** eu inserir um nome sem sobrenome no campo de nome
**Então** devo ver uma mensagem de erro que é necessário informar o nome e sobrenome

### Cenário: Validação do Campo E-mail (RN3)

**Dado** que estou na página de cotação de receitas
**Quando** eu inserir um endereço de e-mail inválido no campo de e-mail
**Então** devo ver uma mensagem de erro pedindo para verificar se o e-mail está correto

### Cenário: Validação do Campo CEP (RN4 e RN5)

**Dado** que estou na página de cotação de receitas
**Quando** eu inserir um CEP que não possui 8 dígitos numéricos
**Então** devo ver uma mensagem de erro informando que o CEP deve conter 8 dígitos

**E** quando eu inserir um CEP válido que não corresponde a um endereço real
**Então** devo ver uma mensagem de erro informando que o CEP não é válido

### Cenário: Validação do Campo Celular (RN6)

**Dado** que estou na página de cotação de receitas
**Quando** eu inserir um número de celular com menos ou mais de 11 dígitos
**Então** devo ver uma mensagem de erro informando que o Celular deve conter 11 dígitos

### Cenário: Prevenção de Envio de Receita Duplicada (RN7)

**Dado** que eu já submeti uma receita com sucesso
**Quando** eu tentar submeter a mesma receita novamente
**Então** devo ver uma mensagem de erro informando que não é permitido enviar duas vezes a mesma receita

## Procedimento de Teste

1. Abra a página de cotação de receitas no ambiente de testes.
2. Siga cada cenário de teste, realizando as ações descritas e observando as respostas esperadas.
3. Registre qualquer comportamento que não esteja de acordo com os cenários descritos.
4. Reporte discrepâncias para serem analisadas pela equipe de desenvolvimento.
