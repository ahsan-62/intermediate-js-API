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
