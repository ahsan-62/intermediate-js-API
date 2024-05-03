


// Destructuring ARRAY and OBJECT

const myDetails = ["Ahsan", "Al", "Bashar", 20];
// const firstName = myDetails[0];
// const middleName = myDetails[1];
// const lastName = myDetails[2];
// const age = myDetails[3];

const [firstName, middleName, lastName, age] = myDetails;
console.log(firstName, middleName, lastName, age)


const hey ={

    name: "Ahsan",
    roll: 20

}


//const  {name , roll } =hey;
const  {name , roll: myRoll } =hey;  //এভাবে প্রোপার্টির নাম চেইঞ্জ করে অন্য নাম দেওয়া যায়।

console.log(name, myRoll);