class Mentoria extends Evento {
    mentora;
    mentorada;

    constructor(urlSalaVirtual, diaSemana, horario) {
        super(urlSalaVirtual, diaSemana, horario);
    } 


}

module.exports = { Mentoria }