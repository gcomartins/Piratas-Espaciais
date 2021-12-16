class Personagem {
    constructor(vida, nome, idade, classe, equipamento, passiva){
        this.vida = vida
        this.nome= nome;
        this.classe = classe;
        this.idade= idade;
        this.equipamento= equipamento;
        this.passiva= passiva;
    }

    atacar1(adversario){
        return `${this.nome} atacou ${adversario.nome} com ${this.equipamento.arma.habilidades.habilidade1.nome} e pode causar ${this.equipamento.arma.dano*this.equipamento.arma.habilidades.habilidade1.multiplicador} de dano`
    }
    atacar2(adversario){
        return `${this.nome} atacou ${adversario.nome} com ${this.equipamento.arma.habilidades.habilidade2.nome} e pode causar ${this.equipamento.arma.dano*this.equipamento.arma.habilidades.habilidade2.multiplicador} de dano`
    }
    defender(adversario){
        return `${this.nome} defendeu o ataque de ${adversario.nome}`
    }
    levar(adversario){
        return `${this.nome} tomou ${adversario.equipamento.arma.dano} de dano de ${adversario.nome}`
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