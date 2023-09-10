const { Evento } = require('../evento/evento');


class GrupoEstudos extends Evento {
    administradora;
    #tema;
    descricao;
    capacidadeMaxima;

    constructor(administradora, tema, capacidadeMaxima, urlSalaVirtual, horario) {
        super(urlSalaVirtual, horario);
        this.administradora = administradora;
        this.tema = tema;
        this.capacidadeMaxima = capacidadeMaxima;
    }


    get tema() {
        //to do
    }
    
    incluirDescricao() {
        //to do
    }

    editarDescricao() {
        //to do
    }

    editarCapacidadeMaxima() {
        //to do
    }
}

module.exports = { GrupoEstudos }