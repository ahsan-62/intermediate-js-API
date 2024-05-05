
const glass= {

    name: 'Ahsan',
    color: 'black',
    Price: 200,
    isCleaned: true
}

const keys = Object.keys(glass);

console.log(keys);

const values= Object.values(glass);

console.log(values);


 //Show pair as Array of Array

const pair=Object.entries(glass);
console.log(pair);

//Delete property

delete glass.Price;
console.log(glass);

// Delete with Spread operator

const {name, ...rest}= glass;
console.log(rest);


//Seal and Freeze

// সিল করলে শুধু Existing প্রোপার্টি ভ্যালু চেইঞ্জ করা যায়
Object.seal(glass);
glass.name='Alam';
console.log(glass);

// ফ্রিজ করলে কোন কিছুই চেইঞ্জ করা যায়না ।এড করা যায়না।
Object.freeze(glass);
glass.name='Alam';
console.log(glass);






