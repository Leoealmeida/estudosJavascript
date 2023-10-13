
const promessaDeNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.randon() = 100)
        resolve(numero)
    }, 5000)
})

promessaDeNumeroQualquer
    .then ((value) => {
    
})
.catch((error) => {
    console.error(error)
})
.finally(() => {
    console.log('finalizou!')
})