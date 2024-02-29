function exibirTexto(){
    console.log('hello world')
}
exibirTexto()

function nomeParametro(nome){
    console.log('Ola' + nome)
}
nomeParametro('Nicolas')

function numeroDobro(numero){
 console.log(numero*2)
}
numeroDobro(2)

function media(numero1,numero2,numero3){
    console.log(parseInt(numero1 + numero2 + numero3) / 3)
}
media(5, 8, 10)

function numeroMaior(numero1,numero2){
    if(numero1 > numero2){
        console.log(numero1)
    } else {
        console.log(numero2)
    }
}
numeroMaior(2,3)

function multiplicaEleMesmo(numeroMultiplicacao){
    console.log( numeroMultiplicacao * numeroMultiplicacao)
}
multiplicaEleMesmo(2)
