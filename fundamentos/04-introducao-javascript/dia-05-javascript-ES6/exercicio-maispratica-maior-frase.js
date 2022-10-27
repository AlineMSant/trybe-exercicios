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






















//     let maiorPalavra = '';
//     let maiorPalavraValor = 0;

//     let palavraAtual = outraFrase[index]; // retorna palavras
//     let tamanhoPalavra = outraFrase[index].length; // retornar tamanhos de acordo com indices

//     if(palavraAtual.length = tamanhoPalavra){
//         maiorPalavra = palavraAtual;
//         console.log(maiorPalavra);
//     }
// }




    // console.log(index, outraFrase[index]); // mostra indices de cada palavra incluindo espaços e as letras respectivas de cada indice.
    // console.log(index); // mostra somente os indices de cada palavra incluindo espaços.
    // console.log(outraFrase[index].length); // mostra tamanho da palavra


