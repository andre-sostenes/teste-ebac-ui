///<reference types="cypress"/>
import produtosPage from '../../support/page-objects/produtos.page';

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
    }); 
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Apollo Running Short');
    });
    it.only('Deve buscar um produto com sucesso', () => {
        let nomeProduto = 'Zeppelin Yoga Pant';
        produtosPage.buscarProduto(nomeProduto);
        cy.get('.product_title').should('contain', nomeProduto);
    });
    it('Deve visitar a página do produto', () => {
        
    });
    it('Deve adicionar produto ao carrinho', () => {
        
    });
});