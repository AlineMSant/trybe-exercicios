// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

//OU seja remova terceiroFilho e quartoEUltimoFilho
document.getElementById("paiDoPai");
let removeElementos = document.getElementById("pai");

let ultimoElemento = document.querySelector("#pai").lastElementChild;
removeElementos.removeChild(ultimoElemento);

ultimoElemento = document.querySelector("#pai").lastElementChild;
removeElementos.removeChild(ultimoElemento);

console.log(removeElementos);

