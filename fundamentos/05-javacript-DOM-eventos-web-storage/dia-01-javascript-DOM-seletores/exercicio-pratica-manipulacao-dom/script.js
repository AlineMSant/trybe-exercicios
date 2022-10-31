// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
// 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

const AlteraParagrafo = document.getElementsByTagName("p");
AlteraParagrafo[1].innerText = "Em 2 anos, me vejo trabalhando já a 1 ano na área de tecnologia como Desenvolvedora Web";

// 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

const backgroundMain = document.getElementsByClassName("main-content");
backgroundMain[0].style.backgroundColor = "rgb(76,164,109)";

// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.

const backgroundCenter = document.getElementsByTagName("section");
backgroundCenter[0].style.backgroundColor = "white";

// 4. Crie e execute uma função que corrija o texto da tag <h1>.

document.getElementsByTagName("h1")[0].innerText = "Exercício - JavaScript";

// 5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.

const primeiraTagP = document.getElementsByTagName("p");
primeiraTagP[0].style.textTransform = "upperCase";

// 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

let todosP = document.getElementsByTagName("p");
for(let i=0; i<todosP.length; i=i+1){
    const array = todosP[i];
    console.log(array);
}

// */