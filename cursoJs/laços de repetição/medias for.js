const notas = [10, 6.5, 8, 7.5]

// media soma todos e divide pelo numero de valores

let somaDasNotas = 0

for(let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
    
}

const medias = somaDasNotas / notas.length;
console.log(medias)