let numeroSecreto = gerarNumeroAleatorio();

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do numero secreto'

// let paragrafo = document.querySelector('p');               // para pegar o elemento q vai ser inserido o texto
// paragrafo.innerHTML = 'Escolha um numero entre 1 e 10'     // inner.HTML - para inserir textos 

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}
exibirTextoTela('h1','Jogo de adivinhar o numero')
exibirTextoTela('p','Escolha um numero entre 1 a 10')

function verificarChute(){
    let chute = document.querySelector('input').value
    console.log(chute == numeroSecreto)
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1)
}

