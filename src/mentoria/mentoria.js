const Evento = require('../evento/evento');

class Mentoria extends Evento {
    mentora;
    mentorada;

    constructor(urlSalaVirtual, diaSemana, horario, usuaria, mentorada) {
        super(urlSalaVirtual, diaSemana, horario);
        this.mentora = usuaria;
        this.mentorada = mentorada;
    } 
}

module.exports = { Mentoria }