const clientes = require("./clientes.json");

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes( valor))
}

const encontrado = encontrar(clientes, "nome", "Kirby")
                    //        lista    chave     valor
const encontrado2 = encontrar(clientes, "email", "aranahan2@yellowbook.com" )
console.log(encontrado2)

