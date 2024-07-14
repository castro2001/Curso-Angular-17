
//#region NUMBER
console.log('*************');
console.log('*****Number********');
console.log('*************');
/*
onst sson variables inmutable : no se puede cambiar el valor una vvez assignada
let sson mutable si puede cambiar ell vaalor de su vaar*/
    const age  = 8;

    let weight= 76.6;

    let weight2: Number;

    weight2 =44;
    let ageInt= '78';

    console.log('*************');
    console.log(age);
    console.log(weight);
    console.log(weight2);
    console.log(ageInt, "parseInt", parseInt(ageInt));
//#endregion

//#region STRING
console.log('*************');
console.log('****STRING***');
console.log('*************');

// es redundante especificar el tipo si ya lo iniciaiciastte con un valor;
const name = 'Jordan';
const lastname: string = 'Castro';


console.log("Nombre:",name);
console.log("Apellido:",lastname);
console.log('****CONCATENACION***');

console.log(name + lastname);

const fullname = `Template Literals (String Interpolation)=> ${name} ${lastname}`;
console.log(fullname);

//#endregion

//#region BOOLEAN
console.log('*************');
console.log('****BOOLEAN***');
console.log('*************');

// es redundante especificar el tipo si ya lo iniciaiciastte con un valor;
const useAngular: boolean =true;
const comparationExpressio= 3>2;

const booleanTexttt = 'aaa';

console.log("Usas Angular:",useAngular);
console.log("cOMPARACION MEDIANTE UNA EXPRESIONN 3 ES MAYOR QUE 2",comparationExpressio);
console.log("Convertir texto a boolean usando la ffuncion boolean",Boolean(booleanTexttt));
console.log("Convertir texto a boolean usando doble negacion !!=>",!!booleanTexttt);




//#endregion



export {};