
 // Nested Object

//Task 01

let data={
    sophia:{
        id:33,
        study:[
            {
                primary:[
                    {school_name:"ABC Primary School"},
                    {location:"dhaka"}
                ]
            },
            {
                secondary:[
                    {school_name:"GHI Secondary School"},
                    {location:"Mymensingh"}
                ]
            }
        ]
    }
}

console.log(data.sophia.study[1].secondary[1].location);


//Task 2

let students={
    2222:{
        name:'jack',
        section:'A',
        class:'10th',
        address:{
            building_no:123,
            street:'abc',
            city:'gabtoli',
            country:'Bangladesh'
        }

    },
    3333:{
        name:'Herry',
        section:'B',
        class:'11th',
        address:{
            building_no:12333,
            street:'asadabc',
            city:'Dhanmondi',
            country:'UK'
        }

    }
}

console.log(students[2222].address.city);

console.log(students[3333].name);


//Task 3

let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

console.log(data2.data[0].bookDetails.name);
console.log(data2.data[1].bookCategory);



