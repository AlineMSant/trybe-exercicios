function sumNatural (n){
    let soma = 0;
    for(i=0; i<=n; i=i+1){
        soma = soma + i;
    }
    return soma;
}

console.log(sumNatural(5));