// 1
let diaSemana = prompt("QUal o dia da semana de hoje?")

if(diaSemana == 'Sabado' || 'Domingo'){
    console.log("Bom fim de semana")
} else {
    console.log("Boa semana")
}

// 2
let numeroUsuario = prompt("Digite um numero")
if(numeroUsuario < 0 ){
    console.log("O numero é negativo")
} else {
    console.log("O numero é positivo")
}

// 3
let pontuacaoJogo = 30
if(pontuacaoJogo > 100){
    console.log("Parabens!! voce venceu")
} else {
    console.log("voce perdeu tente novamente")
}

// 4
let saldoConta = 3000
console.log("O saldo da sua conta é de R$"+saldoConta)

// 5
let nome = prompt("Digite seu nome")
console.log("Olá" + nome + "Seja bem vindo!!")