

const computers=[
    { id: 1, name: 'Asus', ram: 16 },
    { id: 2, name: 'Dell', ram: 32 },
    { id: 3, name: 'Lenovo', ram: 8 }

]

//Map

const rams=computers.map(r=>r.ram);
console.log(rams);

//forEach


computers.forEach(r=>console.log(r.id));


//Filter

const highestRam=computers.filter(r=>r.ram>16);
console.log(highestRam);

//Find

const lowestRam=computers.find(r=>r.ram<32);
console.log(lowestRam);