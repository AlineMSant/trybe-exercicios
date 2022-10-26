

function maior(num1,num2,num3){
    let maiorDeTres = 0;
    if(num1 > num2 && num1 > num3){
        maiorDeTres = num1;
    }else if(num2 > num1 && num2 > num3){
        maiorDeTres = num2;
    }else if(num3 > num1 && num3 > num2){
        maiorDeTres = num3;
    }
    return maiorDeTres;
}

console.log(maior(20,30,10));
