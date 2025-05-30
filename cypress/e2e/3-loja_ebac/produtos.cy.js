///<reference types="cypress"/>
import produtosPage from '../../support/page-objects/produtos.page';

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
    }); 
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Apollo Running Short');
    });
    it('Deve buscar um produto com sucesso', () => {
        let nomeProduto = 'Zeppelin Yoga Pant';
        produtosPage.buscarProduto(nomeProduto);
        cy.get('.product_title').should('contain', nomeProduto);
    });
    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Zeppelin Yoga Pant');
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant');
    });
    it.only('Deve adicionar produto ao carrinho - Buscando da massa de dados', () => {
        cy.fixture('produtos').then((dados) => {
            produtosPage.visitarProduto(dados[2].nomeProduto);
            produtosPage.addProdutoCarrinho(
                dados[2].tamanho, 
                dados[2].cor, 
                dados[2].quantidade);
            cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
        })
    });
});