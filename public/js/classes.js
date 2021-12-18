class Personagem {
    constructor(vida, nome, idade, classe, equipamento, passiva){
        this.vida = vida
        this.nome= nome;
        this.classe = classe;
        this.idade= idade;
        this.equipamento= equipamento;
        this.passiva= passiva;
    }

    atacar(adversario, habilidade){

        if (adversario.vida <= 0) {
    
            console.log(`${adversario.nome} já está inconsciente!`);

            historico.innerHTML = `<h1>Histórico<h1>`;

            historico.innerHTML += `<br>${adversario.nome} já está inconsciente!`


        } else {
            
            console.log(`${this.nome} atacou ${adversario.nome} com ${this.equipamento.arma.habilidades["habilidade" + habilidade].nome} e pode causar ${this.equipamento.arma.dano*this.equipamento.arma.habilidades["habilidade" + habilidade].multiplicador} de dano`); 

            historico.innerHTML = `<h1>Histórico<h1>`;

            historico.innerHTML += `<br>${this.nome} atacou ${adversario.nome} com ${this.equipamento.arma.habilidades["habilidade" + habilidade].nome} e pode causar ${this.equipamento.arma.dano*this.equipamento.arma.habilidades["habilidade" + habilidade].multiplicador} de dano`;
    
            adversario.defender(this, habilidade);
    
            console.log(`Vida ${this.nome}: ${this.vida}`);
            historico.innerHTML += `<br>Vida ${this.nome}: ${this.vida}`;
    
            console.log(`Vida ${adversario.nome}: ${adversario.vida}`);
            historico.innerHTML += `<br>Vida ${adversario.nome}: ${adversario.vida}`;
     
        }
        
        gerarDadosTime();

    }
    
    defender(adversario, habilidade){
        
        let defesa = this.equipamento.peito.armadura + this.equipamento.pernas.armadura + this.equipamento.pes.armadura;
        
        let dano = adversario.equipamento.arma.dano*adversario.equipamento.arma.habilidades["habilidade" + habilidade].multiplicador;

        if (Math.random() > 0.2) {

            this.vida -= dano-defesa;

            console.log(`${this.nome} defendeu o ataque de ${adversario.nome} e tomou ${dano - defesa} de dano de ${adversario.nome}`);
            historico.innerHTML += `<br>${this.nome} defendeu o ataque de ${adversario.nome} e tomou ${dano - defesa} de dano de ${adversario.nome}`;

        } else {

            this.vida -= dano;

            console.log(`${this.nome} tomou ${dano} de dano de ${adversario.nome}`);
            historico.innerHTML += `<br>${this.nome} tomou ${dano} de dano de ${adversario.nome}`;

        }

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