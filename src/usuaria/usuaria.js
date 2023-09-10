class Usuaria {
    nome;
    listaConhecimentos;
    #listaNecessidades;
    #listaGruposEstudos;
    descricaoPessoal;
    email;
    

    constructor(nome, descricaoPessoal, email) {
        this.nome = nome;
        this.descricaoPessoal = descricaoPessoal;
        this.email = email;
    }

    get necessidades() {
        //to do
    }
    
    get gruposEstudos() {
        //to do
    }

    incluirConhecimento(conhecimento) {
        //to do
    }

    excluirConhecimento(conhecimento) {
        //to do
    }

    incluirNecessidade(necessidade) {
        //to do
    }

    excluirNecessidade(necessidade) {
        //to do
    }

    buscarMentoria() {
        //to do
    }

    criarGrupoEstudos() {
        //to do
    }

    participarGrupoEstudos() {
        //to do
    }
}

module.exports = { Usuaria }