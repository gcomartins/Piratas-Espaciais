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

        if (habilidade == 1) {
            
            if (adversario.vida <= 0) {
    
                console.log(`${adversario.nome} já está inconsciente!`);
    
                historico.innerHTML = `<h1>Histórico<h1>`;
    
                historico.innerHTML += `<br>${adversario.nome} já está inconsciente!`
    
    
            } else {
                
                console.log(`${this.nome} atacou ${adversario.nome} com ${this.equipamento.arma.habilidades.habilidade1.nome} e pode causar ${this.equipamento.arma.dano*this.equipamento.arma.habilidades.habilidade1.multiplicador} de dano`); 
    
                historico.innerHTML = `<h1>Histórico<h1>`;
    
                historico.innerHTML += `<br>${this.nome} atacou ${adversario.nome} com ${this.equipamento.arma.habilidades.habilidade1.nome} e pode causar ${this.equipamento.arma.dano*this.equipamento.arma.habilidades.habilidade1.multiplicador} de dano`
        
                adversario.defender(this, 1);
        
                console.log(`Vida ${this.nome}: ${this.vida}`);
                historico.innerHTML += `<br>Vida ${this.nome}: ${this.vida}`
        
                console.log(`Vida ${adversario.nome}: ${adversario.vida}`);
                historico.innerHTML += `<br>Vida ${adversario.nome}: ${adversario.vida}`
    
                
            }
        } else if (habilidade == 2){

            if (adversario.vida <= 0) {

                console.log(`${adversario.nome} já está insconsciente!`);
    
                historico.innerHTML = `<h1>Histórico<h1>`;
    
                historico.innerHTML += `<br>${adversario.nome} já está insconsciente!`
    
    
            } else {
                
                console.log(`${this.nome} atacou ${adversario.nome} com ${this.equipamento.arma.habilidades.habilidade2.nome} e pode causar ${this.equipamento.arma.dano*this.equipamento.arma.habilidades.habilidade2.multiplicador} de dano`); 
    
                historico.innerHTML = `<h1>Histórico<h1>`;
    
                historico.innerHTML += `<br>${this.nome} atacou ${adversario.nome} com ${this.equipamento.arma.habilidades.habilidade2.nome} e pode causar ${this.equipamento.arma.dano*this.equipamento.arma.habilidades.habilidade2.multiplicador} de dano`
        
                adversario.defender(this, 2);
        
                console.log(`Vida ${this.nome}: ${this.vida}`);
                historico.innerHTML += `<br>Vida ${this.nome}: ${this.vida}`
    
                console.log(`Vida ${adversario.nome}: ${adversario.vida}`);
                historico.innerHTML += `<br>Vida ${adversario.nome}: ${adversario.vida}`
    
                
            }

        } else {
            alert('Você passou um parâmetro que não ativa a função atacar()')
        }
        
        gerarDados();
    }
    
    defender(adversario, habilidade){
        
        let dano = adversario.equipamento.arma.dano*adversario.equipamento.arma.habilidades.habilidade1.multiplicador;
        let defesa = this.equipamento.peito.armadura + this.equipamento.pernas.armadura + this.equipamento.pes.armadura;

        if (habilidade == 1) {
            
            if (Math.random() > 0.2) {

                this.vida -= dano-defesa;
    
                console.log(`${this.nome} defendeu o ataque de ${adversario.nome} e tomou ${dano - defesa} de dano de ${adversario.nome}`);
                historico.innerHTML += `<br>${this.nome} defendeu o ataque de ${adversario.nome} e tomou ${dano - defesa} de dano de ${adversario.nome}`
    
            } else {
    
                this.vida -= dano;
    
                console.log(`${this.nome} tomou ${dano} de dano de ${adversario.nome}`);
                historico.innerHTML += `<br>${this.nome} tomou ${dano} de dano de ${adversario.nome}`
    
            }

        } else if (habilidade == 2){

            if (Math.random() > 0.2) {

                this.vida -= dano-defesa;
    
                console.log(`${this.nome} defendeu o ataque de ${adversario.nome} e tomou ${dano - defesa} de dano de ${adversario.nome}`);
                historico.innerHTML += `<br>${this.nome} defendeu o ataque de ${adversario.nome} e tomou ${dano - defesa} de dano de ${adversario.nome}` 
                
            } else {
    
                this.vida -= dano;
                
                console.log(`${this.nome} tomou ${dano} de dano de ${adversario.nome}`);
                historico.innerHTML += `<br>${this.nome} tomou ${dano} de dano de ${adversario.nome}` 
    
            }

        } else {
            alert('Você passou parâmetro errado para a função defender()')
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