let x = '';
console.log(x)
x = 'oi';

function imprimeTexto(texto){
    console.log(texto)
}

//executa a funcao
//imprimeTexto('Oi');
imprimeTexto(soma()) // resultado 4, funcao dentro de uma funcao
imprimeTexto('Mesma Funcao')

//tres formas de escerver a funcao
function soma(){
   return 2 + 2
}

console.log(soma())
