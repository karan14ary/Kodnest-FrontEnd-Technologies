function sayHello(name){
    return "Hello "+name;
}
let x=function fun(sayHello,name)
{return sayHello(name);}
let y=(sayHello,name)=>sayHello(name);

console.log(x(sayHello,"Deep"));
console.log(y(sayHello,"Karan"));