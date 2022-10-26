let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem-vinda,' + ' ' + info.personagem);

info['recorrente'] = "sim";
// console.log(info);

for(let chaves in info){
    // console.log(chaves);
}

for(let valor in info){
    // console.log(info[valor]);
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
  };

for(let valor in info){
    if(valor === 'recorrente' && info[valor] === 'sim' && info2[valor] === 'sim'){
        console.log('Ambos recorrentes')
    }else{
        console.log(info[valor] + ' ' + 'e' + ' ' + info2[valor]);
    }
}




