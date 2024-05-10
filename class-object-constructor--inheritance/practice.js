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