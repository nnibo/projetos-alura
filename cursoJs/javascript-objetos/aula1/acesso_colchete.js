const cliente = {
    nome : "andre",
    idade : 32,
    cpf : "1122233345",
    email : "andre@dominio.com"
};

console.log(cliente["cpf"]) // outra forma de acessar alem do (cliente.cpf)

console.log(cliente.cpf.substring(0, 3)) // resultado 112

const chaves = ["nome", "idade", "cpf", "email"];
chaves.forEach( (chaves) =>{
    console.log("A chave"+chaves+"tem valor"+cliente[chaves])
} )