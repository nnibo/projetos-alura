const cliente = { 
    nome: "Joao",
    idade: 24,
    email:"joao@firma.com",
    telefone : ["111222333" , "333222111"], 

};

cliente.enderecos = [
    {
    rua : "R. Joseph Climber",
    numero : 1337,
    apartamento : true,
    complemento : "Apto 212"
    },

]

cliente.enderecos.push({
    rua : "R. Nibaum",
    numero : 1447,
    apartamento: true,
    complemento : "Apto 101"
})

const listaApenasApartamento = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)
console.log(cliente.enderecos)   