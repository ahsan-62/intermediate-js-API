//Arrow Function,Multiple_Parameter, Function Body

//1

// function add(a,b){

//     const result=a+b;
//     return result;
// }
// const res=add(5,9);
// console.log(res);


//2

function add(a,b){

    return a+b;

}
const sum=add(5,9);
console.log(sum);


//function expression

const add1=function(a,b){
    return a+b;
}

const sum1=add1(5,4);
console.log(sum1);

//arrow function

const add2=(a,b) => a+b;

const sum2=add2(5,80);
console.log(sum2);