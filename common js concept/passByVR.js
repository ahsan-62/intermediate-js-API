

// ফাংশনের ভিতরের কোন চেইঞ্জের জন্য ভ্যারিয়েবলের ভ্যালু গুলো চেইঞ্জ হবেনা।এটাই পাস বাই ভ্যালু। Primitive data type er jonno sudhu.


let x=5;
let y=7;

function serial(a,b){

    console.log(a,b);
    a=10;
    const sum=a+b;

    return sum;

}

const result=serial(x,y);
console.log(result)



//pass by reference

const add={name:'ahsan',roll:20};

function jun(address){

    address.name='jun';

    return address;

}

console.log(add);
const printOut=jun(add);
console.log(printOut);
console.log(add);
