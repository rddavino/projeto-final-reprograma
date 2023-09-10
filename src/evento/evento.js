class Evento {
    urlSalaVirtual; 
    listaDiaSemana;
    horario;
    #listaParticipantes;

    static eventosCriados;
  
    constructor(urlSalaVirtual, diaSemana, horario) {
        this.urlSalaVirtual = urlSalaVirtual; 
        this.listaDiaSemana.push(diaSemana);
        this.horario = horario;
        Evento.eventosCriados.push(this);
    }

    get participantes() {
        //to do
    }

    editarDiaSemana(novoDia) {
        //to do
    }

    editarHorario(novoHorario) {
        //to do
    }

    editarSalaVirtual(novaSala) {
        //to do
    }

    excluirEvento(evento) {
        //to do
    }

    incluirParticipante(participante) {
        //to do
    }
  

}

module.exports = { Evento }