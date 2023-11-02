const nomes = ['Joao','Ana','Caio','Lara','Marjorie','Leo']

nomes.splice(1, 2, 'Rodrigo')// primeiro parametro faz a partir de qual indice deseja alterar, o 2 parametro é quantos itens a partir do indice escolhido vao ser removidos
console.log(nomes)// o resultado vai ser a mesma lista soq sem Ana e Caio
// nomes.push('Rodrigo')