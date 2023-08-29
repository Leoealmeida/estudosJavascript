function escrevaMeuNome(nome){
    return "Meu nome é " + nome;
}

//escrevaMeuNome ("Léo");

function verificarIdade(idade){
    if (idade >= 18){
        console.log(escrevaMeuNome("Léo ") + 'é Maior');
    } else {
        console.log('Menor');
    }
}

verificarIdade(36);