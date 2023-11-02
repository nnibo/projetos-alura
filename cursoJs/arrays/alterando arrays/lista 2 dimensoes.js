const nomes = ['Joao','Juliana','Caio','Ana']
const medias = [10,8,7.5,9]

const listaUnificada = [nomes, medias]
console.log(listaUnificada)

console.log('A aluna da posição 1 da lista de alunos é '+ listaUnificada[0][1] + 'A nota dessa aluna é'
+ listaUnificada[1][1]) // no primeiro parametro colocamos o indice das listas, por exemplo
//temos 2 listas, logo os indices serao 0 e 1, nesse exemplo estou acessando a lista 0 e o 1 indice dessa lista, que é Juliana