function verificaPalindrome(word){
    let array = word.split('');
    let reverso = '';
    reverso = array.reverse();
    let palavraReversa = reverso.join('');
    
    let resultado = false;

    if(word === palavraReversa){
        resultado = true;
    }else{
        resultado = false;
    }
    return resultado;
}


console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

