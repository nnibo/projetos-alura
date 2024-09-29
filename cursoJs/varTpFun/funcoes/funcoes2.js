// parametros / argumentos
// retorno
const prompt = require('prompt-sync')()


function exibeInfosEstudante(nome, nota){
   return'O nome é '+nome+' e sua nota é '+nota
}

console.log(exibeInfosEstudante('Carol', 10))
console.log(exibeInfosEstudante('Ana', 5))

function somarDoisNumeros(numA, numB) {
    return numA + numB;
   }
   
   // execução (ou chamada) da função
   somarDoisNumeros(2, 2);
   
   // atribuindo o retorno de uma função a uma variável
   const resultado = somarDoisNumeros(2, 2);
   console.log(resultado);