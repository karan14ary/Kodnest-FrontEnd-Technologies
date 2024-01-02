function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}
let x= function fun(a,b,calc){
    return calc(a,b);
}
console.log(x(10,20,add))
console.log(x(20,10,sub))
console.log(x(10,20,mul))
console.log(x(20,10,div))
