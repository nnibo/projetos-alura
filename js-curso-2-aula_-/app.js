let numeroSecreto = 5
let tentativas = 1

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do numero secreto'

// let paragrafo = document.querySelector('p');               // para pegar o elemento q vai ser inserido o texto
// paragrafo.innerHTML = 'Escolha um numero entre 1 e 10'     // inner.HTML - para inserir textos 

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function exibirMensagemInicial(){
    exibirTextoTela('h1','Jogo de adivinhar o numero')
    exibirTextoTela('p','Escolha um numero entre 1 a 10')
    
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value
    if(chute == numeroSecreto){
        exibirTextoTela('h1','Voce acertou o numero!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativa = 'Voce descobriu o numero secreto com' + tentativas + palavraTentativa
        exibirTextoTela('p',mensagemTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoTela('p','O numero secreto é menor q o chute')   
        } else {
            exibirTextoTela('p','O numero secreto é maior q o chute')
        }
        tentativas += 1
        limparCampo()
        
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1)
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}



