const {Mentoria} = require('../mentoria/mentoria');

class Usuaria {
    nome;
    descricaoPessoal;
    email;
    listaConhecimentos;
    listaInteresses;
    diponivelParaMentoria;
    mentoria;
    mentorasDisponiveis;
    static usuariasCriadas = [];

    constructor(nome, descricaoPessoal, email, diponivelParaMentoria) {
        this.nome = nome;
        this.descricaoPessoal = descricaoPessoal;
        this.email = email;
        this.diponivelParaMentoria = diponivelParaMentoria;
        this.listaConhecimentos = [];
        this.listaInteresses = [];
        this.mentorasDisponiveis = [];
        this.mentoria = null;
        Usuaria.usuariasCriadas.push({
            nome: this.nome,
            email: this.email
        });
    }


    incluirConhecimento(conhecimento) {
        this.listaConhecimentos.push(conhecimento);
    }

    excluirConhecimento(conhecimento) {
        const indice = this.listaConhecimentos.indexOf(conhecimento);
        if (indice !== -1) {
            this.listaConhecimentos.splice(indice, 1);
            console.log(`${conhecimento} foi removido.`);
            return true;
        } else {
            console.error(`${conhecimento} não foi encontrado.`);
            return false;
        }
    }

    incluirInteresse(interesse) {
        this.listaInteresses.push(interesse);
    }

    excluirInteresse(interesse) {
        const indice = this.listaInteresses.indexOf(interesse);
        if (indice !== -1) {
            this.listaInteresses.splice(indice, 1);
            console.log(`${interesse} foi removido.`);
            return true;
        } else {
            console.error(`${interesse} não foi encontrado.`);
            return false;
        }
    }

    editarDescricao(descricao) {
        this.descricaoPessoal = descricao;
    }

    editarDisponibilidadeParaMentoria() {
        this.diponivelParaMentoria = !this.diponivelParaMentoria;
        console.log(`Disponibilidade para mentoria alterada com sucesso.`)
    }

    listarMentoras(interesse) {
        
        Usuaria.usuariasCriadas.forEach(usuaria => {
            if (usuaria.diponivelParaMentoria && usuaria.listaConhecimentos.includes(interesse)) {
                this.mentorasDisponiveis.push(usuaria.nome);
            }
        })
        
        if(this.mentorasDisponiveis == []) {
            console.log("Nenhuma mentora disponível para o interesse informado");
        } else {
            console.log(`Resultado da busca por ${interesse}: ${this.mentorasDisponiveis}`);
        }
    }

    iniciarMentoria(url, dias, horario, mentora, mentorada) {
        let mentoradaAuxiliar = {
            nome: mentorada.nome,
            email: mentorada.email
        }

        let mentoraAuxiliar = {
            nome: mentora.nome,
            email: mentora.email
        }
        this.mentoria = new Mentoria(url, dias, horario, mentoraAuxiliar, mentoradaAuxiliar);
    }

    finalizarMentoria() {
            this.mentoria.excluirEvento();
        }

    excluirUsuaria() {
            const indice = Usuaria.usuariasCriadas.indexOf(this);
            if(indice !== -1) {
            Usuaria.usuariasCriadas.splice(indice, 1);
            console.log(`Usuária foi removida.`);
            return true;
        } else {
            console.error(`Usuária não foi encontrada.`);
            return false;
        }
    }
}

let thayssa = new Usuaria("Thayssa", "Posso ajudar com testes em Jest", "thayssa@email.com", false);
thayssa.incluirConhecimento("testes com jest");

let raquel = new Usuaria("Raquel", "Gosta de front-end", "raquel@email.com", true);
raquel.incluirConhecimento("javascript");

// let elvira = new Usuaria("Elvira", "Olá!", "elvira@email.com", true);
// elvira.incluirConhecimento("javascript")


// let laissa = new Usuaria("Laíssa", "Te ajudo com Linkedin!", "laissa@email.com", false)
// laissa.editarDisponibilidadeParaMentoria();


thayssa.listarMentoras("javascript")

// laissa.excluirUsuaria();
// console.log("usuarias:", Usuaria.usuariasCriadas);

raquel.iniciarMentoria("meet.com", "segunda", "5:30", raquel, thayssa);

console.log("==================")
console.log(raquel)

module.exports = {Usuaria};