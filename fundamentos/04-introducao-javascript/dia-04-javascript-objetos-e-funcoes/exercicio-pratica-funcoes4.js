
function names(array){
    let maior = '';
    for(let index in array){
        if(array[index].length > maior.length){
         maior = array[index];
        }
     }
    return(maior)   
}

console.log(names(['José', 'Lucas', 'Nádia','Cairo', 'Joana','Fernanda']));

