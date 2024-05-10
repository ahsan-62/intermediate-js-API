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