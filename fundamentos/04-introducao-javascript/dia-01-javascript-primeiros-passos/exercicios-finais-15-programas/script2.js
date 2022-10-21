const angulo1 = 60;
const angulo2 = 100;
const angulo3 = 20;

if (angulo1<0 || angulo2<0 || angulo3<0){
    console.log("ERRO! Não se trata de um angulo.");
}else if (angulo1 + angulo2 + angulo3 === 180){
    console.log(true);
}else if (angulo1 + angulo2 + angulo3 !== 180){
    console.log(false); 
}