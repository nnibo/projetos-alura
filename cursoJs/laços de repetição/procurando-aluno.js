const nomes = ['Joao','Juliana','Caio','Ana']
const medias = [10,8,7.5,9]

const listaUnificada = [nomes, medias];

function exibeNomeENota(aluno){
    if(listaUnificada[0].includes(aluno)){
        console.log("O aluno"+ aluno + "Está cadastrado")
    
        // const alunos = listaUnificada[0]
        // const medias = listaUnificada[1]

        const [alunos, medias] = listaUnificada

        const indice = alunos.indexOf(aluno)
        console.log(indice) // resultado vai ser Joao no indice 0

        const mediaDoAluno = medias[indice] // vai me trazer o indice 0 da media, que no caso é 10
        console.log('A media do '+aluno+ ' é '+mediaDoAluno)
    }   else{
        console.log("O aluno nao esta cadastrado")
    }
}

exibeNomeENota("Joao");

// O metodo indexOf nos da o resultado do indice do que procuramos, por exemplo na const indice procurei pela lista nomes, e pedi para que o programa
// me trouxesse o indice do aluno cadastrado, que no caso do Joao é 0

// O metodo include confere se o parametro que passamos para o aluno esta incluso na nossa lista