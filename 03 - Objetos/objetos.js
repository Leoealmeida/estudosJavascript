class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

    //constructor (nome, idade) {
      //  this.nome = nome;
       // this.idade = idade;
        //this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const leo = new Pessoa('Leo', 36);

console.log(leo);