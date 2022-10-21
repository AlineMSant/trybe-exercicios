let pecaDeXadrez =("TORRE");

switch(pecaDeXadrez.toLowerCase()) {
    case "rei":
        console.log("Qualquer direção, porém uma casa por vez");
    break;
    case "dama":
        console.log("Qualquer direção, quantas casas quiser");
    break;
    case "torre":
        console.log("Em linha reta, vertical ou horizontal quantas casas quiser");
    break;
    case "peão":
        console.log("Em qualquer direção, uma casa por vez,  exeto recuar");
    break;
    case "bispo":
        console.log("Diagonal, quantas casas quiser");
    break;
    case "cavalo":
        console.log("Pode saltar sobre outra peça, uma casa para a esquerda ou para a direita na horizontal e depois duas casas para cima ou para baixo na vertical");
    break;
default:
    console.log("Não é uma peça de xadrez!!!")
}
