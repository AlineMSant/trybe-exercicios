const longestWord = (frase) =>{ // era function longestWord (frase)
    let outraFrase = frase.split(' ') // retorna cada palavra dentro de uma array
    let maiorPalavra = '';
    let tamanho = 0;
    
    for(let index of outraFrase){
        // console.log(index.length);
        if (index.length > tamanho){
            tamanho = index.length;
            maiorPalavra = index;
        }
    }
    return maiorPalavra;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
