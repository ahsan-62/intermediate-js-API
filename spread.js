
//   With Math library   //

const maximumValue = Math.max(10, 20, 30, 40, 50, 60, 70, 80, 90, 9);
console.log(maximumValue);

//   With spread operator   //

const numbers = [10, 20, 30, 40, 50, 111, 70, 80, 90, 9];

//const arrayMax=Math.max(numbers); // Not a number(NaN)with given as output for this array

// console.log(numbers);// will show as [10,20,30,40,50,111,70,80,90,9]

console.log(...numbers); //will show as 10,20,30,40,50,111,70,80,90,9

const arrayMax = Math.max(...numbers); //with spread operator

console.log(arrayMax);





//Copy Array and Copy by Spread operator


const bondhu =[1,2,3,4,5,6,7,8,9];
const newBondhu=bondhu;
console.log(...newBondhu);
