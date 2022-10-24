let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAri = 0;

for(i=0; i<numbers.length; i=i+1){
   soma = soma + numbers[i];
   mediaAri = soma/numbers.length;
}

console.log(soma);
console.log(mediaAri);

if(mediaAri > 20){
    console.log("valor maior que 20");
}else if(mediaAri <= 20){
    console.log("valor menor ou igual a 20");
}


let maior = 0;
for(i=0; i < numbers.length; i=i+1){
    if(numbers[i]> maior) {
        maior = numbers[i];
    }
}

console.log(maior);

let impar = 0;

for (i=0 ;i<numbers.length; i=i+1){
    if(numbers[i] % 2 !== 0){
        impar = impar + 1;
    }else if (impar === 0){
        impar = "nenhum valor impar encontrado"
    }
}

console.log(impar);

let menor = maior ;

for(i=0; i<numbers.length; i=i+1){
    if(numbers[i] < menor){
    menor = numbers[i];
    }
}

console.log(menor)

let divide = 0;

for(i=1; i<= 25; i=i+1){
    console.log(i);
}

console.log("")

for(i=1; i<= 25; i=i+1){
    divide = i/2;
    console.log(divide);
}