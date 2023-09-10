const { Usuaria } = require("../usuaria/usuaria");

class Mentora extends Usuaria {
    #mentorada;
    static listaMentoras;

    constructor(nome, descricao, email, mentorada) {
        super(nome, descricao, email);
        this.mentorada = mentorada;
        Mentora.listaMentoras.push(this);
    }


    get mentorada() {
        //to do
    }

    
}

module.exports = { Mentora }