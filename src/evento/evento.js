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

    incluirDiaSemana(novoDia) {
        if(this.listaDiaSemana.some(dia => dia === novoDia)) {
            console.log("Dia da semana já registrado");
            return false;
        } else {
            this.listaDiaSemana.push(novoDia);
            return true;
        }
    }

    excluirDiaSemana(diaParaRemover) {
        const indice = this.listaDiaSemana.indexOf(diaParaRemover);
        if (indice !== -1) {
            this.listaDiaSemana.splice(indice, 1);
            console.log(`Dia removido.`);
            return true;
        } else {
            console.error(`Dia não encontrado.`);
            return false;
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