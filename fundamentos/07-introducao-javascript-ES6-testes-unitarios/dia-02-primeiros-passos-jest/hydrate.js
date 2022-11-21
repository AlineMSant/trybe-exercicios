
function hydrate(string) {
    let array = string.split('');
    let arrayNumerosString = [];
    let arrayNumeros = [];
    let soma = 0;
  
    for(i = 0; i<array.length;i=i+1){
      if(array[i] === "1" || array[i] === "2" || array[i] === "3" || array[i] === "4" || array[i] === "5" || array[i] === "6" || array[i] === "7" || array[i] === "8" || array[i] === "9"){
        arrayNumerosString.push(array[i]);
      }
    }
  
    for(i=0; i<arrayNumerosString.length; i=i+1){
      arrayNumeros.push(parseInt(arrayNumerosString[i]));
    }
  
    for(i=0; i<arrayNumeros.length; i=i+1){
      soma = soma + arrayNumeros[i];
    }
  
    let frase = "";
  
    if(soma === 1){
      frase = `${soma} copo de água`;
    }else if(soma > 1){
      frase = `${soma} copos de água`;
    }
    return frase;
  }


module.exports = hydrate;

