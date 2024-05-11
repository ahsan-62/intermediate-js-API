function stopWatch(){

    let count=0;
    return function(){
        count++;
        return count;
    }

}

//closure is when a function return a function and can access the variable in the outer function.

const stopWatch1=stopWatch();
console.log(stopWatch1());
console.log(stopWatch1());
console.log(stopWatch1());

const stopWatch2=stopWatch();
console.log(stopWatch2());
console.log(stopWatch2());
console.log(stopWatch2());

console.log(stopWatch1());
console.log(stopWatch1());
console.log(stopWatch2());





/*


A closure is created when a function is defined within another function, allowing the inner function to access the outer function’s variables. The inner function maintains a reference to the variables in its lexical scope, even after the outer function has finished executing. This encapsulation of variables within a function creates a closure.

function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}
// Create a closure by calling outerFunction and assigning the result to a variable
let closure = outerFunction();

// Execute the closure, which still has access to outerVariable
closure(); // Outputs: "I am from the outer function"
In this example, innerFunction is a closure because it retains access to outerVariable from its containing scope, even though outerFunction has completed execution.

Key Characteristics of Closures:

1. Access to Outer Variables:
Closures have the ability to access variables from their containing scope. This access creates a link between the inner function and the variables it relies on.

2. Preservation of State:

Closures capture and retain the values of variables at the time of their creation. This feature is particularly useful for maintaining state across multiple function calls.

3. Encapsulation:

Closures enable the creation of private variables. By defining variables within a function, you can control their accessibility and protect them from external interference.

Use Cases of Closures
1.Private Variables:
Closures are commonly employed to create private variables. These variables are inaccessible from outside the function, providing a level of encapsulation and preventing unintended modifications.

function counter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

let increment = counter();
increment(); // Outputs: 1
increment(); // Outputs: 2
2. Data Encapsulation:

Closures facilitate the encapsulation of data and behavior within a function, promoting a modular and organized code structure.

function user() {
  let name = '';
  let age = 0;

  return {
    setName: function(newName) {
      name = newName;
    },
    setAge: function(newAge) {
      age = newAge;
    },
    getInfo: function() {
      return `${name} is ${age} years old.`;
    }
  };
}

let person = user();
person.setName('John');
person.setAge(30);
console.log(person.getInfo()); // Outputs: "John is 30 years old."
3. Function Factories:

Closures are instrumental in creating function factories, where functions are generated dynamically based on certain parameters.

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

let double = multiplier(2);
console.log(double(5)); // Outputs: 10


*/
