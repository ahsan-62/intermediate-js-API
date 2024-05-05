

//problem -1 - Write a template string that concatenates the strings "I am a web developer.", "I love to code.", and "I love to eat."

const first='I am a web developer.';
const second='I love to code.';
const third='I love to eat.';

const res=`${first}${second}${third}`;
console.log(res)


//problem -2 - Write a function that takes two parameters, a and b, and returns their sum.

const sum=(a,b=5)=>a+b;
const result= sum(5);
console.log('The sum of a and b is: ',result);


//problem -3 - Take an array of names and return an array of only the names that have an even number of characters.

const friends=['Ahmed','Sayed','Ali','Mahmud'];

const allFriends=(classFriend)=>{
    for(const friend of classFriend){
       if(friend.length%2===0){
        const even=[];
        even.push(friend);
        return even;
       }
    }
}
const result1 =allFriends(friends);
console.log(result1);

//Problem-4 -Take an array of numbers and square each number ,return the average of the numbers.

const arr=[5,7,8,9];

const summ=(array)=>{

    let sum=0;

    for(const num of array){

        const sqr=num*num;
        sum+=sqr;
    }

    const avrg=sum/array.length;
    return avrg;
}

const result2=summ(arr);
console.log(result2);

//Problem-5 -Take two arrays ,Merge into a new array and Find the maximum number.


const fun=(array1,array2)=>{
    const newArray1=array1;
    const newArray2=array2;

    const newArray=[];

    newArray.push(...newArray1);
    newArray.push(...newArray2);

    const maximum=Math.max(...newArray)

    return maximum;
    
}

const arr1=[10,21,32];
const arr2=[14,25,26,];
const result3=fun(arr1,arr2);
console.log(result3);

