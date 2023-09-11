const { Evento } = require('../evento/evento');


class GrupoEstudos extends Evento {
    administradora;
    descricao;
    capacidadeMaxima;
    #tema;
    #listaParticipantes;
    
    static gruposEstudosCriados;

    constructor(administradora, tema, capacidadeMaxima, urlSalaVirtual, horario) {
        super(urlSalaVirtual, horario);
        this.administradora = administradora;
        this.tema = tema;
        this.capacidadeMaxima = capacidadeMaxima;
        GrupoEstudos.gruposEstudosCriados.push(this);
    }


    get tema() {
        //to do
    }

    get listaParticipantes() {
        //to do
        //return this.listaParticipantes;
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

    incluirParticipante(participante) {
        //to do
    }

    excluirParticipante(participante, usuaria) {
        //to do - veriticar se é usuaria é adm
    }
}

module.exports = { GrupoEstudos }