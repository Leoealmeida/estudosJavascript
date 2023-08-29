const precoEtanol = 3.19;
const precoGasolina = 5.19;
const tipoCombustivel = "Etanol" 
const kmPorLitro = 10;
const distancia = 100;
 
const litrosConsumidos = distancia/ kmPorLitro;

if (tipoCombustivel === "Etanol"){
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}

else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}