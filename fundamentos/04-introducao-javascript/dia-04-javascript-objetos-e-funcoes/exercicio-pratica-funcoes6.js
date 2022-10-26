function verificaFimDaPalavra(word,ending){
    // Essa parte mudaria ending para 'ndo', o que faz darsempre true na lógica e estava errado
    // let final = ending;
    // final = [];
    // final.push(word[word.length - 3]);
    // final.push(word[word.length - 2]);
    // final.push(word[word.length - 1]);
    // final = final.join('');

    let palavra = word;
    palavra = palavra.split('');
    palavra = palavra[palavra.length -3] + palavra[palavra.length -2] + palavra[palavra.length -1];

    let resultado = false;

    if(palavra === ending){
        resultado = true;
    }else if(palavra !== ending){
        resultado = false;
    }
return resultado;
}

console.log(verificaFimDaPalavra('fernando','ndo'));

