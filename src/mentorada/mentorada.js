const { Usuaria } = require("../usuaria/usuaria");

class Mentorada extends Usuaria {
    #mentora;

    constructor(nome, descricao, email) {
        super(nome, descricao, email);
    }


    get mentora() {
        //to do
    }
}

module.exports = { Mentorada }