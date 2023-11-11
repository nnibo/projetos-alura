const pessoa = {
    nome : "Luma",
    profissao : "engenheira"
};

console.log(pessoa.nome) // resultado Luma

console.log(pessoa.telefone) // resultado undefined

pessoa.telefone = 1112312312 
console.log(pessoa.telefone) // resultado vai ser o telefone

const novaPessoa = {
    nome : "pedro"
}

pessoa = novaPessoa
console.log(pessoa) // erro pois pessoa é uma constante