const users={
    name:'Ahsan',
    roll:20,
    address:{
        city:'Dhaka',
        
        dis:{
            name:'Dhaka',
            country:'Bangladesh',
            unit:[{
                sector:'uttara',
                color:'red',
                distance:120
            }]
        }
    }
}

console.log(users.address.dis.unit[0].color);  //Etai chaining ,Access the value from the nested object.

console.log(users.address.upazila?.unit[0].distance); // ? mark diye error handle kora jaii.property na thakle sekhanei theme jabe .Etake Optional chaining Bole.