const a = 2;
const b = 4;
const c = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if(a>b){
    console.log(a);
}else if(b>a){
    console.log(b);
}

if(a>b && a>c){
    console.log(a);
}else if(b>a && b>c){
    console.log(b);
}else if(c>b && c>a){
    console.log(c);
}
