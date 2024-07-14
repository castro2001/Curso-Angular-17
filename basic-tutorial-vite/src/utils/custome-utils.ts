export interface ICustomer{
    name: string,
    lastname: string,
    email:string,
    address:{
        description:string,
        city:string,
        country:string,
    };
}

export const showCustomerData = (customer: ICustomer)=>{
    console.log('***********************************')
    console.log('**********Datos del Clientes*******')
    console.log('***********************************')

    const {
        name,
        lastname,
        email,
        address:{
            description,
            city,
            country
        }
    } = customer

    console.log('Nombre: ', name);
    console.log('Apellido: ',lastname )
    console.log('Email: ',email )
    console.log('**********Dirección*******')
    console.log('Dirección: ',description )
    console.log('Ciudad: ',city )
    console.log('País: ',country )
}

