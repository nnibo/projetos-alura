alert("Boas vindas ao jogo do numero secreto")

const numeroSecreto = Math.floor(Math.random() * 10 + 1) //numero randomizado Math. floor(Math. random() * (max – min + 1)) + min.
let tentativas = 1;
let numeroEscolhido;



while(numeroEscolhido != numeroSecreto){
    let numeroEscolhido = prompt("Escolha um numero entre 1 a 10")

    if(numeroSecreto == numeroEscolhido){
    break; // break faz o loop parar
} else {
    if(numeroSecreto > numeroEscolhido){
        alert("O numero secreto é maior q o escolhido")
    } else if(numeroSecreto < numeroEscolhido) {
        alert("O numero secreto é menor q o numero escolhido")
    }
}
tentativas += 1;
}
let palavraTentativa = tentativas > 1? "tentativas" : "tentativa"


    alert("parabens voce descobriu o "+numeroSecreto+ " com " + tentativas +  palavraTentativa)




