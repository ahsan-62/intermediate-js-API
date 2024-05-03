//Arrow Function,single parameter, function body


const differences =(x,y) => x-y;

const dif=differences(10,5);
console.log(dif);


//single parameter with no parenthesis and Body
 
const square= x => x*x;
const result = square(5);
console.log(result);

// single parameter with parenthesis and no body

const cube= (x)=> x*x*x;
const result1 = cube(5);
console.log(result1)

//multiple parameter

const sum = (x,y) => x+y;
const res = sum(5,5);
console.log(res)    



//Arrow function with object

const obj= (ahsan) => ahsan.age;

const details={
    name:'Ahsan',
    age:20
};
const name = obj(details);
console.log(name);


//Arrow function with array

const list=(ar) => ar[1];
const arr=[10,15,20,25,30];
const num = list(arr);
console.log(num);