class Evento {
    urlSalaVirtual; 
    listaDiaSemana = [];
    horario;

    static eventosCriados = [];
  
    constructor(urlSalaVirtual, diaSemana, horario) {
        this.urlSalaVirtual = urlSalaVirtual; 
        this.listaDiaSemana.push(diaSemana);
        this.horario = horario;
        Evento.eventosCriados.push(this);
    }

    editarDiaSemana(novoDia) {
        if(this.listaDiaSemana.some(dia => dia === novoDia)) {
            dia = novoDia
        } else {
            this.listaDiaSemana.push(dia);
        }
    }

    editarHorario(novoHorario) {
        this.horario = novoHorario;
    }

    editarSalaVirtual(novaSala) {
        this.urlSalaVirtual = novaSala;
    }

    excluirEvento() {
        const indice = Evento.eventosCriados.indexOf(this);
        if (indice !== -1) {
            Evento.eventosCriados.splice(indice, 1);
            console.log(`Evento removido.`);
            return true;
        } else {
            console.error(`Evento não encontrado.`);
            return false;
        }
    }
}

module.exports = {Evento};