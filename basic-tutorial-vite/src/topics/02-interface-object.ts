
//#region Interface - Object

//Interface 
interface IPerson{
    name: string,
    lastname: string,
    age: number
}

//herencia en las interfaces
interface IEstudent extends IPerson {
    career:string,
    semester:string
}

//Object
const person1 :IPerson ={
    name: 'Jordan',
    lastname:'Castro',
    age:25
}

const estudent: IEstudent= {
        name:'Miguel',
        lastname:'Diaz',
        age:21,
        career:'Ingenieria Informatica',
        semester:'4 semester '
}



console.log('(Persona ) Interface padre => ',person1);
console.log('(Estudiante) Interface hija hereda los objetos de la interface padre =>', estudent);

export {};