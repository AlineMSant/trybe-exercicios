// Crie um irmão para elementoOndeVoceEsta. *adicionei um texto para identificar

let idPai = document.getElementById("pai");

let irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = "testeIrmão";

idPai.appendChild(irmaoElementoOndeVoceEsta);

// Crie um filho para elementoOndeVoceEsta. *adicionei um texto para identificar

let idElementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

let filhoElementoOndeVocêEsta = document.createElement("section");
filhoElementoOndeVocêEsta.id = "outroFilho";

idElementoOndeVoceEsta.appendChild(filhoElementoOndeVocêEsta);


// Crie um filho para primeiroFilhoDoFilho.

let idPrimeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho")

let filhoPrimeiroFilhoDoFilho = document.createElement("section");
filhoPrimeiroFilhoDoFilho.id = "filhoPrimeiroFilhoDoFilho";

idPrimeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.

filhoPrimeiroFilhoDoFilho.parentElement;
primeiroFilhoDoFilho.parentElement;
elementoOndeVoceEsta.nextElementSibling;

