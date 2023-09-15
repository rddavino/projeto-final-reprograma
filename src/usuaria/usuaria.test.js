const { Usuaria } = require('./usuaria');

describe("Verifica módulo Usuária", () => {

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

     // describe("Verifica o método buscarConhecimento", () => {
    //     it("deveria percorrer lista de conhecimento e retornar true caso encontre o conhecimento informado por parâmetro na função.", () => {
    //         expect().toBeTruthy()
    //     });

    // it("deveria percorrer lista de conhecimento e retornar false caso não encontre o conhecimento informado por parâmetro na função.", () => {
        //         expect().toBeFalsy()
        //     });
    // });

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

    // describe("Verifica o método editarDescricao", () => {
    //     it("deveria modificar a descrição pela descrição informada por parâmetro na função", () => {
    //         expect().toEqual()
    //     });
    // });

    // describe("Verifica o método ficarDisponivelParaMentoria", () => {
    //     it("deveria atribuir ao atributo disponivelParamentoria o valor true", () => {
    //         expect().toEqual()
    //     });
    // });

    describe("Verifica o método listarMentoria", () => {
        it("deveria exibir uma lista de mentoras disponíveis para um assunto de interesse específico informado por parâmetro na função ", () => {
            let interesse = "liderança"

            let usuaria2 = new Usuaria("Raquel", "Gosta de front-end", "raquel@email.com");
            usuaria2.incluirConhecimento(interesse)
            usuaria2.editarDisponibilidadeParaMentoria();

            let usuaria3 = new Usuaria("Maria", "Gosta de backend", "maria@email.com")
            usuaria3.editarDisponibilidadeParaMentoria();
            resultado = ['Raquel'];

            expect(usuaria1.listarMentoras(interesse)).toBe(resultado)
        });

    });

    // describe("Verifica o método iniciarMentoria", () => {
    //     it("deveria ...", () => {
    //         expect().toEqual()
    //     });
    // });

    // describe("Verifica o método finalizarMentoria", () => {
    //     it("deveria ...", () => {
    //         expect().toEqual()
    //     });
    // });

    // describe("Verifica o método excluirUsuaria", () => {
    //     it("deveria remover a usuária da lista de usuárias criadas.", () => {
    //         expect().toEqual()
    //     });
    // });
})