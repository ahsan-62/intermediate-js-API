//Find the name of all the senior developers

const instructor=[
    {name:'Ahsan',age:20,position:'senior'},
    {name:'Jun',age:15,position:'junior'},
    {name:'Bashar',age:22,position:'senior'},
]

// Find the total age of all instructors


//Forloop

const find=instructor.filter(instc=>instc.position==='senior');
const findName=find.forEach(people=>{
    console.log(people.name);
});

let sumOfAge=0;
for(let i=0;i<instructor.length;i++){

    sumOfAge+=instructor[i].age;
    
}

console.log(sumOfAge);


const totalAge=instructor.map(age=>age.age).reduce((a,b)=>a+b,0);

console.log(totalAge);