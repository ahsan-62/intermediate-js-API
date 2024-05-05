

//problem -1

const first='I am a web developer.';
const second='I love to code.';
const third='I love to eat.';

const res=`${first}${second}${third}`;
console.log(res)


//problem -2

const sum=(a,b=5)=>a+b;
const result= sum(5);
console.log('The sum of a and b is: ',result);


//problem -3

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

//Problem-4

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

//Problem-5

const arr1=[5,7,8,9];
const arr2=[1,2,3,4];

const fun=(array1,array2)=>{
    
}

