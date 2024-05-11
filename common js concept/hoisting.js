for(var i=0;i<5;i++){
    console.log(i);
}
console.log('outside',i);


// var diye korle hoisting hoy.Ejonno let diye variable declare korte hoi

// for(let i=0;i<5;i++){
//     console.log(i);
// }
// console.log('outside',i);

ahsan();
//evabe function likhle hoisting kore se upore niye jaii
function ahsan(){
    console.log('I am ahsan',70);
}

//kintu const variable diye likhle function nichei call korte hbe

// jun();
const jun=function(){
    console.log('I am jun',20);
}

jun();
