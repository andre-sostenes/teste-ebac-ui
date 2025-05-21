///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login',() => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    afterEach(() => {
        cy.screenshot()
    });
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('andre.teste@teste.com')
        cy.get('#password').type('andré1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, andre.teste (não é andre.teste? Sair)')
    })
    it('Deve exibir uma mensagem de erro ao inserir um usuário inválido', () => {
        cy.get('#username').type('andr.teste@teste.com')
        cy.get('#password').type('andré1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')

    });
    it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
        cy.get('#username').type('andre.teste@teste.com')
        cy.get('#password').type('andre1235')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail andre.teste@teste.com está incorreta. Perdeu a senha?')
    })
    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, andre.teste (não é andre.teste? Sair)')
    })
    it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, { log: false})
            cy.get('#password').type(dados.senha, { log: false })
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, andre.teste (não é andre.teste? Sair)')
        })
    })
})