

     class Person{

        constructor(name,age,address){
            this.name=name;
            this.age=age;
            this.address=address;
                }

        
                jun(){
                    console.log('My name is',this.name,'I am',this.age,'years old and I live in',this.address);
                }

                afsin(){
                    this.jun();
                    console.log('I am from afsin');
                   
                }
                
     }


     const ahsan= new Person('Ahsan',20,'Dhaka');
     console.log(ahsan);
     ahsan.afsin();