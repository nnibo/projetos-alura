let titulo = ducoment.querySelector('h1')
titulo.innerHTML = 'Hora do desafio'

function botaoConsole(){
    console.log('O botao foi clicado')
}

function abrirAlerta(){
    alert('Eu amo JS')
}

function cidadePrompt(){
    let cidade = prompt('Qual é a sua cidade?')

    alert('Estive em '+ cidade + ' e lembrei de voce')
}

function soma(){
    let num1 = parseInt(prompt('Digite o primeiro numero'))
    let num2 = parseInt(prompt('Digite o segundo numero'))

    let total = num1 + num2
    alert(total)
}