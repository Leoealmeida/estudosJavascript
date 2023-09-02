// Faça um programa que calcule e imprima o salário a ser tranferido para um funcionario
// Para realizar o calculo receba o valor bruto do salário e o adicional dos beneficios 
// O salario a ser tranferido é calculado da seguinte maneira: 
// Valor bruto do salário - percentual de importos mediante a faixa salaial + adicional dos beneficios
// Para calcular o pecentual de importos segue as aliquitas:

//      De R$0.00 a R$1100.00 = 5.00%
//      De R$1000.01 a R$2500.00 = 10.00%
//      Maior que R$2500.00 = 15.00%

//      Exemplo: 
//          Entradda: 
//              2000
//              250

//          Saida:
//              2050.00

const {gets, print} = require('./funcoes-auxiliares-ex3');

const salarioBruto = gets();
const valorBeneficios = gets();

function calcularPorcentagem (valor, percentual){
    return valor * (percentual / 100);
}
function pegarAliquota(salario){
    
    if (salario >= 0 && salario <= 1100){
        return 5;
    } else if (salario >= 1101 && salario <= 2500){
        return 10;
    } else {
        return 15;
    }
}

const aliquoImposto = pegarAliquota(salarioBruto);
const valorImposto = calcularPorcentagem(salarioBruto, aliquoImposto)

const valorATransferir = salarioBruto - valorImposto + valorBeneficios;
print(valorATransferir);