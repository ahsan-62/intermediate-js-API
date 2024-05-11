

/*
function ahsan(junFunction,name){
    jun(name); // ekhane abr jun function k call krlm ahsan function er moddhe .etai call back function
}

function jun(name){
    console.log('My Wife name is',name)
}

ahsan(jun,'jun'); //jun function ta ahsan function er parameter hisebe pass korlam ,abr name parameter taw niye jaii


*/


//Call Back function

function wishMode(modeFunction,name){

    modeFunction(name);
}

function morning(name){
    console.log('Good Morning',name);
}

function afternoon(name){
    console.log('Good Afternoon',name);
}

function evening(name){ 
    console.log('Good Evening',name);
}

wishMode(morning,'Ahsan');
wishMode(afternoon,'Jun');
wishMode(evening,'Bashar');
wishMode(evening,'AhsanJun');