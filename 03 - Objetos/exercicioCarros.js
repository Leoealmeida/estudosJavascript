class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGastoDePercurso(distancia, precoCombustivel){
        return distancia * this.gastoMedio * precoCombustivel; 

    }
}
    const c3 = new Carro('citroen','branco',1/7,);

    console.log(c3.calcularGastoDePercurso(100, 5.49));

