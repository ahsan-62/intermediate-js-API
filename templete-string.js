const firstName='Ahsan';
const middleName='Al';
const lastName='Bashar';


const name= firstName + " "+ middleName + ' ' + lastName;
console.log(name);

const a=50;
const b=60;

//general way
const result= 'The sum of '+ a+ ' and ' + b+ ' is '+ (a+b);
console.log(result);

//template string-backtick or grave accent

const res=`The sum of ${a} and ${b} is ${a+b}`;
console.log(res);


//By template string we can use line with new line
const multiLine= `This is the first line
This is the second line `;
console.log(multiLine);

//General way-with \n

const email='My email is \n '+
'ahsan@gmail.com';
console.log(email);
