console.log('***********************************')
console.log('**********OBJECT***********')
console.log('***********************************')

interface ICustomer{
    name: string,
    lastname: string,
    email:string,
    address:{
        description:string,
        city:string,
        country:string,
    };
}

const customer :ICustomer={
    name:'Aracely',
    lastname:'Castro',
    email:'aracely@gmail.com',
    address:{
        description:'41 y rosendo Aviles',
        city:'Guayaquil',
        country:'Ecuador'
    }
}
console.log('**********Acceddiendo a objetos normalmente en js***********')

console.log('Nombre: ', customer.name);
console.log('Apellido ', customer.lastname);
//destructuracion objetos con ts
const {
    name,
    lastname,
    address:{city}
    } = customer ;


console.log('**********Acceddiendo a objetos Usando Ts mediante destructuracion***********')
console.log('Nombre: ', name);
console.log('Apellido ',lastname )
console.log('Ciudad ',city )

console.log('***********************************')
console.log('**********ARRAYS***********')
console.log('***********************************')

const pokemon:string[]=['Pikachu','Charizad','GreeNinja'];

const [poke,poke2]= pokemon; //para acceder a una posicion de mi arreglo declaro var para acceder a ellos

 const [,,poke3]= pokemon
 const [,,,poke4='No existte ese pokemon']= pokemon

console.log(' Accediendo a un array usando js (Pokemon 2)  : ', pokemon[1]);

console.log(' Accediendo a un array destructuracion Ts (Pokemon 2)  : ', poke2);
console.log(' Accediendo a un array destructuracion Ts (Pokemon 3 cuando solo quiero acceder a un valor de mi arreglo)  : ', poke3);
console.log(' Accediendo a un array destructuracion Ts (Pokemon 4 mostrar un msg cuando no exissta ese arreglo)  : ', poke4);


export {};