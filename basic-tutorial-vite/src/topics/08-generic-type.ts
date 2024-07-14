import { ICustomer } from "../utils/custome-utils";
import { customer, customer2 } from "./06-imports-exports";

const array1=[1,2,5,3];
const array2=['a','b','c','d'];

const getFirstItem = (array: string[])=>{
    return array[0];
}

const getFirstItem2 = (array: number[])=>{
    return array[0];
}
// console.log(
//     getFirstItem(array2));


// lla forma de generic type <T> ES DEL TTIPO

const genericType = <T>(array: T[])=>{
    return array[2]
}
console.log(    genericType<number>(array1) )
console.log(    genericType<string>(array2) )
/*

magia de inferir unn tipo de dato

*/

interface IResponse<T=void>{
    code:string,
    message:string,
    data?:T
}

//Diferentes formas de ussar generic ttyppe 
//Objeto
const responseObject:IResponse<ICustomer>={
    code:'357A',
    message:'Data of Customer',
    data:customer
}

//Array Objetos
const responseArrayObject:IResponse<ICustomer[]>={
    code:'357A',
    message:'Data of Customer Arraay Objecct',
    data:[customer,customer2]
}

//Boolean
const responseBoolean:IResponse<boolean>={
    code:'357A',
    message:'Prueba de Acceso',
    data:false
}

// Cuando la data es opccional 
const responseOpcional:IResponse={
    code:'357A',
    message:'Datta es opcional',
    
}

//Console
console.log("Response by generic type (Object) =>",responseObject);
console.log("Response by generic type (Array Object)=> ",responseArrayObject);
console.log("Response by generic type (Boolean)=> ",responseBoolean);
console.log("Response by generic type (Opcional data)=> ",responseOpcional);
