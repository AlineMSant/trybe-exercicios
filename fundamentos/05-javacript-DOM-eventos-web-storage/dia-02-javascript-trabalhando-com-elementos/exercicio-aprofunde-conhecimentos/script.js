//Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
let criaTitulo = document.createElement("h1");
criaTitulo.innerText = "Exercício - JavaScript DOM";
document.body.appendChild(criaTitulo);


//Adicione a tag main com a classe main-content como filho da tag body;
let criaMain = document.createElement("main");
criaMain.className = "main-content";
document.body.appendChild(criaMain);

//Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let criaSection = document.createElement("section");
criaSection.className = 'center-content';
criaMain.appendChild(criaSection);

//Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let section = document.getElementsByTagName("section");
let criaP = document.createElement("p");
criaP.innerText = "algum Texto";
section[0].appendChild(criaP);

//Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let criaSectionMain = document.createElement("section");
criaSectionMain.className = 'left-content';
criaMain.appendChild(criaSectionMain);

//Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let criaTerceiraSection = document.createElement("section");
criaTerceiraSection.className = 'right-content';
criaTerceiraSection.id = "terceira-section";
criaMain.appendChild(criaTerceiraSection);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let criaImg = document.createElement("img");
criaImg.className = 'small-image';
criaImg.src = 'https://picsum.photos/200';
criaSectionMain.appendChild(criaImg);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;



let array = ["um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];

let onde = document.getElementById("terceira-section");

for(i=0; i<array.length; i = i+1){
    let valoresLista = array[i];

    let criaLista = document.createElement("li");
    criaLista.innerText = valoresLista;

    onde.appendChild(criaLista);
    
}

//Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

let subtitulo1 = document.createElement('h3');
subtitulo1.innerText = "subtitulo1"
criaMain.appendChild(subtitulo1);

let subtitulo2 = document.createElement('h3');
subtitulo2.innerText = "subtitulo2"
criaMain.appendChild(subtitulo2);

let subtitulo3 = document.createElement('h3');
subtitulo3.innerText = "subtitulo3"
criaMain.appendChild(subtitulo3);

// Adicione a classe title na tag h1 criada.

criaTitulo.className = "title";

// Adicione a classe description nas 3 tags h3 criadas;

subtitulo1.className = 'description';
subtitulo2.className = 'description';
subtitulo3.className = 'description';

// Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

let paiDeSection = document.getElementsByClassName("main-content")[0];
let sectionExercicio5 = document.getElementsByClassName("left-content")[0];

paiDeSection.removeChild(sectionExercicio5);

// Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

let sectionExercicio6 = document.getElementsByClassName('right-content')[0];
sectionExercicio6.style.marginRight = "auto";

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

let paiSection3 = document.getElementsByClassName('center-content')[0].parentElement;
paiSection3.style.backgroundColor = "green";

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

let ultimaTerceiraSection = document.getElementById("terceira-section")
let elementosDeletar = ultimaTerceiraSection.lastElementChild;
ultimaTerceiraSection.removeChild(elementosDeletar);

ultimaTerceiraSection = document.getElementById("terceira-section")
elementosDeletar = ultimaTerceiraSection.lastElementChild;
ultimaTerceiraSection.removeChild(elementosDeletar);
