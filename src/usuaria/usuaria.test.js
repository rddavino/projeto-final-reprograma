const { Usuaria } = require('./usuaria');

describe("Testes para a classe Evento", () => {

    let usuaria1;

    beforeEach(() => {
        usuaria1 = new Usuaria("Thayssa", "É legal e ajuda a fazer testes", "thayssa@email.com");
    });

    describe("Verifica o método incluirConhecimento", () => {
        it("deveria incluir o conhecimento passado por parâmetro na lista de conhecimentos da usuária", () => {
            let conhecimento = "testes com jest";
            usuaria1.incluirConhecimento(conhecimento);
            expect(usuaria1.listaConhecimentos).toContain(conhecimento);
        });
    });

    describe("Verifica o método excluirConhecimento", () => {
        it("deveria remover o conhecimento passado por parâmetro da lista de conhecimentos da usuária", () => {
            let conhecimento = "testes com jest";
            usuaria1.excluirConhecimento(conhecimento);
            expect(usuaria1.excluirConhecimento).not.toContain(conhecimento);
        });
    });

    describe("Verifica o método incluirInteresse", () => {
        it("deveria incluir o interesse passado por parâmetro na lista de interesses da usuária", () => {
            let interesse = "react";
            usuaria1.incluirInteresse(interesse);
            expect(usuaria1.listaInteresses).toContain(interesse);
        });
    });

    describe("Verifica o método excluirInteresse", () => {
        it("deveria remover o interesse passado por parâmetro da lista de interesses da usuária", () => {
            let interesse = "react";
            usuaria1.excluirInteresse(interesse);
            expect(usuaria1.excluirInteresse).not.toContain(interesse);
        });
    });
  
})