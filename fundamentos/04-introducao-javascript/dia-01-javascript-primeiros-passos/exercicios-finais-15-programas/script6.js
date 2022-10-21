const custo = 100;
const valorVenda = 100;
let valorCustoTotal = custo + (custo/100*20);
let quantidade = 1000;
let lucro;


if(custo < 0 || valorVenda < 0){
    console.log("ERRO! Você deve inserir valores para custo e volerVenda");
}else{
    lucro = (valorVenda - valorCustoTotal) * quantidade;
}

console.log(lucro);