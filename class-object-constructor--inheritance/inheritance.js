

class Vehicle{

    constructor(name,price){

        this.name=name;
        this.price=price;
    }
}

class Bus extends Vehicle{

    constructor(name ,price,seat){
        super(name,price);
        this.seat=seat;
    }
}

class Car extends Vehicle{

    constructor(name,price,engine){
        super(name,price);
        this.engine=engine;
    }
}

const car1=new Car('ma',200,'petrol');
console.log(car1);

const car2= new Car('bmw',500,'diesel');
console.log(car2);

