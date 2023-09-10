const { Usuaria } = require('../usuaria/usuaria');


class Administardora extends Usuaria {
    #grupoEstudos;

    constructor(nome, descricao, email) {
        super(nome, descricao, email);
    }


    get gruposEstudos() {
        //to do
    }

    aceitarParticipante(participante) {
        //to do
    }

    excluirParticipante(participante) {
        //to do
    }

    excluirGrupo(grupoEstudos) {
        //to do
    }
}

module.exports = { Administardora }