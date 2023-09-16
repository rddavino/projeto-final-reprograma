const { Mentoria } = require('./mentoria');
const { Usuaria } = require('../usuaria/usuaria');

describe("Testes para a classe Mentoria", () => {

    describe("Verifica se o objeto criado é uma instância da classe Mentoria", () => {
        it("deveria", () => {

            let usuaria1 = new Usuaria("Raquel", "Gosta de front-end", "raquel@email.com", true);

            let usuaria2 = new Usuaria("Maria", "Gosta de backend", "maria@email.com", true);

            usuaria1.iniciarMentoria("meet.com", "segunda", "15:30", usuaria1, usuaria2)
            const mentoria1 = new Mentoria();
            expect(mentoria1).toBeInstanceOf(Mentoria);
        });
    });
})