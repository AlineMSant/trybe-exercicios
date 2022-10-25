
function angulos (ang1, ang2 , ang3){
    if(ang1 < 0 || ang2 <0 || ang3 <0){
        return "Não se trata de valores para angulo";
    }else if(ang1 + ang2 + ang3 !== 180){
        return false;
    }else if(ang1 + ang2 + ang3 === 180){
        return true;
    }
}

console.log(angulos(100,40,40));


