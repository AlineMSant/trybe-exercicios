const currentHour = 11;
let message= "";

if(currentHour > 4 && currentHour <= 11){
    message = "Hmm, cheirinho de café";
}else if(currentHour > 11 && currentHour <= 14){
    message = "Hora do almoço";
}else if(currentHour >14 && currentHour <= 18){
    message = "Vamos fazer um bolo pro café da tarde";
}else if(currentHour > 18 && currentHour <= 22){
    message = "Rango da noite, vamos jantar :D";
}else{
    message = "Não deveriamos comer nada, é hora de dormir"
}

console.log(typeof(message));
