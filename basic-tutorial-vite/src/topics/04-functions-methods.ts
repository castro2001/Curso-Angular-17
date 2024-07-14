// laa diferencia de una  funcion ssiemmpre retorna unn valor y un method o retorrnna nnaada 
//#region Method
console.log('*************');
console.log('*****Method********');
console.log('*************');

function showMessages():void{
    console.log('Hello is Method');
}
// js moderno arrow function
const greet = (name:string):void=>{
        console.log(`hello ${name}`)
}
showMessages();
greet('jordan');
//#endregion

//#region Function
console.log('*************');
console.log('*****Functions********');
console.log('*************');
function sum(a:number, b:number){
    return a+b;
}

const sum2 = (a:number, b:number)=>{
    return a+b;
}
console.log("Functionss creado en Js (sum)",sum(5,5))
console.log("Functionss Arrow creado en Js (sum)",sum2(5,5))
//#endregion

//#region Buenas Practicas
    //En caso que los metodos o funciones requieren multiples parametros lo ideal es pasar todo por un objeto
    //Esto es una mala practica X 
    const showStudentData=(
            name: string,
            lastname: string,
            age: number,
            career:string,
            semester:string,
            cycle:number
        )=> {
            console.log('Los datos del Estudiante son los siguientes:');
            console.log(`Nombre: ${name}`);
            console.log(`Apellido: ${lastname}`);
            console.log(`Edad: ${age}`);
            console.log(`Carrera: ${career}`);
            console.log(`Semestre: ${semester}`);
            console.log(`Ciclo: ${cycle}`);
            }


    showStudentData('jordan','castro',15,'Informatica','5 semesttre',5)

    //Esto es buena Practica
    //Creamos una interace conn los objetos qque van aa tener
    interface IPerson{
        name: string,
        lastname: string,
        age: number
    }

    interface IEstudent extends IPerson {
        career:string,
        semester:string,
        cycle?: number
    }
    // lo ideal crear un objeto y pasar todos sus valores que necesitemos
    const showStudent= (data: IEstudent)=>{
        console.log('**************Los datos del Estudiante son los siguientes: **************');
        console.log(`Nombre: ${data.name}`);
        console.log(`Apellido: ${data.lastname}`);
        console.log(`Edad: ${data.age}`);
        console.log(`Carrera: ${data.career}`);
        console.log(`Semestre: ${data.semester}`);
        console.log(`Ciclo: ${data.cycle}`);
    }


    const estudent: IEstudent= {
        name:'Miguel',
        lastname:'Diaz',
        age:21,
        career:'Ingenieria Informatica',
        semester:'4 semester ',

        cycle:2045
        }

        showStudent(estudent);


//#endregion


export {};