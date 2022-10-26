
function positiveNegative (num){
    if(num > 0){
        return "positive";
    }else if(num < 0){
        return "negative";
    }else if(num === 0){
        return "zero"
    }
}

console.log(positiveNegative(0));