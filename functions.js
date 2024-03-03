function sum(a,b){
return a+b;
}

console.log(sum(10,2));

function product(a,b){
    return a*b;
}

console.log(product(10, 2));

// anonymous function
setTimeout(function (){
    console.log("Hello timeout");
}, 1000);

//arrow function
setTimeout(()=> console.log("Hello timeout"), 1000);