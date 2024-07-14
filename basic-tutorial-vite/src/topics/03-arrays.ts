//Interfaces
interface IPets{
    name: string,
    age: string,
    species:string,
    isFomale: boolean,
    vaccines:string[]
}


//En Js
const elements = [2,'adaddaaa',false,{name:'dad'}];
//En Ts
const messages : string[]=['Info','message informative'];
//Array de Objetos
const petsRambo: IPets={
    name:'Rambo',
    age:'7 años',
    species:'Perro',
    isFomale:true,
    vaccines:['Rabia','Mockillo']
}

const petsRelampago: IPets={
    name:'Relampago',
    age:'2 años',
    species:'Perro',
    isFomale:false,
    vaccines:['Rabia','Mockillo']
}

const petsRex: IPets={
    name:'Rex',
    age:'2 años',
    species:'Perro',
    isFomale:false,
    vaccines:['Rabia','Mockillo']
}

//arreglo de objetos
const pets: IPets[]=[petsRambo,petsRelampago,petsRex]

//estamos mostrando las mascostas femeninas con filter
const petFemale= pets.filter((pet)=>{
    return pet.isFomale;
});


//Mostramos en la consola
console.log("Array creado en Js (element)",elements)
console.log("Array creado en Ts (messages)",messages)
console.log(" Objetos creado en Ts (pets)",petsRambo)
console.log(" Objetos creado en Ts (pets2)",petsRelampago)
console.log("Array Objetos creado en Ts (pets2)",pets)
console.log("Mascota Femenina (Female)",petFemale)



export {};