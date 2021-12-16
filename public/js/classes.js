class Personagem {
    constructor(nome, idade, classe, equipamento, habilidades){
        this.nome= nome;
        this.classe = classe;
        this.idade= idade;
        this.equipamento= equipamento;
        this.habilidades= habilidades;
    }

    atacar(adversario){
        return `${this.nome} atacou ${adversario.nome}`
    }
    defender(adversario){
        return `${this.nome} defendeu ${adversario.nome}`
    }
    levar(adversario){
        return `${this.nome} tomou 10 de dano de ${adversario.nome}`
    }
}
class Equipamento {
    constructor(nome, armadura){
        this.nome= nome;
        this.armadura= armadura;
    }
}
class Habilidade {
    constructor(nome, descricao, multiplicador){
        this.nome= nome;
        this.descricao= descricao;
        this.multiplicador= multiplicador;
    }
}
class Arma {
    constructor(nome, descricao, dano, habilidades){
        this.nome= nome;
        this.descricao= descricao;
        this.dano= dano;
        this.habilidades = habilidades
    }
}
class Passiva {
    constructor (nome, descricao){
        this.nome = nome;
        this.descricao = descricao;
    }
}