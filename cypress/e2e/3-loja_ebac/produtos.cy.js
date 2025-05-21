///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    }); 
    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row').contains('Apollo Running Short').click()
        cy.get('.product_title').should('contain', 'Apollo Running Short')
    });
});