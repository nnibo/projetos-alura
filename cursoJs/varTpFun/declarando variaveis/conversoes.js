// tipo de dado
// booleanos

// conversao implicita

//Number()
//String()

const numero = 456;
const numeroString = "456";

console.log(numero === numeroString); // (== : true ; ===: false)
console.log(numero + numeroString) //resultado: 456456
console.log(numero + Number(numeroString)) //resultado: 912 (conversao explicita)

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.

usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.


let usuarioConectado1 = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.

usuarioConectado1 = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.


