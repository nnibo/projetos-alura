const nomes = ["Evaldo", "Mari", "Camis"]

nomes.forEach(function(nomesLegais) {
console.log(nomesLegais) //resultado os nomes da const nomes
}) // tambem podemos fazer com arrow function, ficaria nomes.forEach(nomesLegais) => ...

function imprimeNome(nome){
    console.log(nome)
}

nomes.forEach(imprimeNome);