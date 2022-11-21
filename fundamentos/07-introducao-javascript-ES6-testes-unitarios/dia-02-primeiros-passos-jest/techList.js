const techList = (array, nome) => {
let arraySorted = array.sort(); 
let objeto = [];

if(array.length === 0){
    objeto = 'Vazio!';
}else{
    for(i=0; i<arraySorted.length; i=i+1){
    objeto.push({
        tech: arraySorted[i],
        name: nome,
    })
  }
}
return objeto;
};

module.exports = techList;