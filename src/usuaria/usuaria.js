class Usuaria {
    nome;
    descricaoPessoal;
    email;    
    listaConhecimentos;
    #listaInteresses;
    #listaGruposEstudos;
    diponivelParaMentoria;
    
    static usuariasCriadas;

    constructor(nome, descricaoPessoal, email) {
        this.nome = nome;
        this.descricaoPessoal = descricaoPessoal;
        this.email = email;
        this.listaConhecimentos = [];
        Usuaria.usuariasCriadas.push(this);
    }

    get listaInteresses() {
        //to do
    }
    
    get listaGruposEstudos() {
        //to do
    }

    incluirDescricao() {
        //to do
    }
    
    incluirConhecimento(conhecimento) {
        this.listaConhecimentos.push(conhecimento);
    }

    excluirConhecimento(conhecimento) {
        //to do
        //this.listaConhecimentos.find()...
    }

    incluirInteresse(interesse) {
        this.listaInteresses.push(interesse);
    }

    excluirInteresse(interesse) {
        //to do
    }

    buscarMentoria(interesse) {
        //to do
        //percorrer usuariasCriadas e buscar por:
        // 1- usuaria.diponivelParaMentoria == true
        // 2 - usuaria.listaConhecimentos includes interesse
    }

    finalizarMentoria() {
        //to do
    }

    criarGrupoEstudos() {
        //to do
        //let grupoEstudos = new GrupoEstudos(this, tema, capacidadeMaxima, urlSalaVirtual, horario)
    }

    excluirGrupoEstudos(grupoEstudos) {
        //to do
        //this.excluirEvento(grupoEstudos, usuaria)
    }

    aceitarParticipanteEmGrupo(participante) {
        //to do
        // this.incluirParticipante(participante)

    }

    removerParticipanteDeGrupo(participante) {
        //to do
        //excluirParticipante(participante, usuaria)
    }
    
    participarGrupoEstudos() {
        //to do
        //this.listaParticipantes.push(this)
    }

    excluirUsuaria() {
        //to do
        //Usuaria.usuariasCriadas.find...
    }    
}

module.exports = { Usuaria }