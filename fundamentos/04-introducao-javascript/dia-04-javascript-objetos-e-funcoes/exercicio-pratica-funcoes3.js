function maior (num1,num2,num3,num4,num5,num6,num7){
    let array = [num1,num2,num3,num4,num5,num6,num7];
    let numero =0;
    for(let index in array){
        if(array[index]<index){
            numero = index;
        }
    }
    return numero;
}


console.log(maior(2, 4, 6, 7, 10, 0, -3));

