const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();

//   A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>;
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>;
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>.
  
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function criaDias(){
  for(index = 0; index<decemberDaysList.length; index = index +1){
    let days = decemberDaysList[index];

    let ondeSeraIncluido = document.getElementById('days');
    let criaElementosComDias = document.createElement('li');
    criaElementosComDias.innerText = days;

    if(days === 24 || days === 31){
        criaElementosComDias.className = 'day holiday';
        ondeSeraIncluido.appendChild(criaElementosComDias);
    }else if(days === 4 || days === 11 || days === 18){
        criaElementosComDias.className = 'day friday';
        ondeSeraIncluido.appendChild(criaElementosComDias);
    }else if(days === 25){
        criaElementosComDias.className = 'day holiday friday';
        ondeSeraIncluido.appendChild(criaElementosComDias);
    }else{
        criaElementosComDias.className = 'day';
        ondeSeraIncluido.appendChild(criaElementosComDias);
    }
  }
}

criaDias();

//   Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
//   Sua função deve receber um parâmetro com a string 'Feriados';
//   Adicione a este botão a ID "btn-holiday";
//   Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function botao(parametro){
    let ondeBotao = document.getElementsByClassName('buttons-container')[0];
    let criaBotao = document.createElement('button');
    criaBotao.innerHTML = parametro;
    criaBotao.id = 'btn-holiday';

    ondeBotao.appendChild(criaBotao);

}

botao('Feriado');

// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday";
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".



function mudaCor(){
    let botaoHoliday = document.querySelector('#btn-holiday');
    let referenciaHoliday = document.querySelectorAll('.holiday');
    let corDeFundo = 'rgb(238, 238, 238)';
    let novaCor = 'pink';

    botaoHoliday.addEventListener('click', () => {
        for(let index = 0; index <referenciaHoliday.length; index = index+1){
            if(referenciaHoliday[index].style.backgroundColor === corDeFundo){
                referenciaHoliday[index].style.backgroundColor = novaCor;
            }else{
                referenciaHoliday[index].style.backgroundColor = corDeFundo;
            }
        }        
    })
}

mudaCor();

// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira";
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function botaoSexta (parametro){
    let ondeCriaBotaoSexta = document.getElementsByClassName('buttons-container')[0];
    let criaElemento = document.createElement('button');
    criaElemento.innerText = parametro;
    criaElemento.id = 'btn-friday';

    ondeCriaBotaoSexta.appendChild(criaElemento);
}

botaoSexta('Sexta-Feira');

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira;
// Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

function modificaSexta(numeros){
    let botaoSexta = document.getElementById('btn-friday');
    let referenciaDia = document.getElementsByClassName('friday');
    let mudaSexta = 'Friday';
    botaoSexta.addEventListener('click', () =>{
        for(i=0; i<referenciaDia.length; i=i+1){
            if(referenciaDia[i].innerText !== mudaSexta){
            referenciaDia[i].innerText = mudaSexta;
            }else{
            referenciaDia[i].innerText = numeros[i];
            }
        }
    })
}

modificaSexta([4,11,18,25]);


// Implemente duas funções que criem um efeito de “zoom”;
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// De olho na dica 👀: Você pode utilizar a propriedade event.target.

function zoom (){
    let dias = document.querySelector('#days');
    
    dias.addEventListener('mouseover', (evento) => {
    evento.target.style.fontSize = '25px';
    });
}

function zoomOut (){
    let dias = document.querySelector('#days');
    
    dias.addEventListener('mouseout', (evento) => {
    evento.target.style.fontSize = '20px';
    });
}

zoom();
zoomOut();

// Implemente uma função que adicione uma tarefa personalizada ao calendário;
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function tarefa (tarefa){
    let onde = document.getElementsByClassName('my-tasks')[0];
    let criaElemento = document.createElement('span');
    criaElemento.innerText = tarefa;
    onde.appendChild(criaElemento);
}

tarefa('cozinhar');


// Implemente uma função que adicione uma legenda com cor para a tarefa;
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task;
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function corLegenda(cor){
    let ondecriaElement = document.getElementsByClassName('my-tasks')[0];
    let criaElement = document.createElement('div');
    criaElement.className = 'task';
    criaElement.style.backgroundColor = cor;

    ondecriaElement.appendChild(criaElement);
}

corLegenda('pink');


// Implemente uma função que selecione uma tarefa;
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada;
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

function taskSelect (){
    let corTarefa = document.getElementsByClassName('task')[0];
    let selecionado = 'task-selected';

    corTarefa.addEventListener('click', ()=> {
    if(corTarefa.className !== selecionado){
        corTarefa.className = 'task-selected';
    }else{
        corTarefa.className = 'task';
    }
  })
}

taskSelect();

// Implemente uma função que atribua a cor da tarefa ao dia do calendário;
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada;
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).

function alteraCorCalendario (){
    let selecionado = document.getElementsByClassName('task-selected');
    let dias = document.querySelector('#days');
    let refDiv = document.getElementsByClassName('my-tasks')[0];
    let divTask = refDiv.lastChild;
    let divColor = divTask.style.backgroundColor;

    dias.addEventListener('click', (evento) =>{
        if(selecionado.length > 0 && evento.target.style.color === 'rgb(119, 119, 119)'){
        evento.target.style.color = divColor;
        }else{
        evento.target.style.color = 'rgb(119, 119, 119)'
        }
    })
}

alteraCorCalendario();

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”;

// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em “ADICIONAR”;

// Ao pressionar a tecla “enter” o evento também deverá ser disparado.
// De olho na dica 👀: Você pode utilizar a propriedade key.

function compromisso(){
let caixaId = document.getElementById('task-input');
let botaoId = document.getElementById('btn-add');
let listaId = document.getElementsByClassName('task-list')[0];



botaoId.addEventListener('click', () =>{
    if(caixaId.value.length > 0){
        let itemLista = document.createElement('li')
        itemLista.innerText = caixaId.value
        listaId.appendChild(itemLista);
    }else{
        alert('Erro: vocẽ deve inserir um compromisso antes de adicionar!')
    }
})

caixaId.addEventListener('keyup', (evento) =>{
    if(evento.key === 'Enter' && caixaId.value.length > 0){
    let itemLista = document.createElement('li');
    itemLista.innerText = caixaId.value;
    listaId.appendChild(itemLista);
    }
})
}

compromisso();
