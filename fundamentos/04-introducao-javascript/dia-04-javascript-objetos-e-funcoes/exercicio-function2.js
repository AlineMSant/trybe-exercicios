// retornar maior de dois numeros

function maior(num1,num2){
    let maiorDeDois = 0;
    if(num1 > num2){
        maiorDeDois = num1;
    }else{
        maiorDeDois = num2;
    }
    return maiorDeDois;
}

console.log(maior(10,20));
