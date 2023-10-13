// Fisrt Class Functions 
// Higer Order Functions

function falarMeuNome () {
    console.log('Meu nome é Leonardo ')
}

const referenciaNova = falarMeuNome

referenciaNova()

//outra forma de declarar uma função 

const nomeDafuncao = function () {


}

//Arrow function

const funcao1 = () => {

}

// closurer é utilizada para lembrar o contextoda função

function soma(x) {
    return function (y) {
        return x + y
    }
}

const somaParcial = soma(10)

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))