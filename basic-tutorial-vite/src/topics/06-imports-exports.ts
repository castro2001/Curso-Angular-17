import { ICustomer, showCustomerData } from "../utils/custome-utils";

export const customer: ICustomer={
    name:'Aracely',
    lastname:'Castro',
    email:'aracely@gmail.com',
    address:{
        description:'41 y rosendo Aviles',
        city:'Guayaquil',
        country:'Ecuador'
    }
}

export const customer2: ICustomer={
    name:'Sofia',
    lastname:'Castro',
    email:'Sofia@gmail.com',
    address:{
        description:'41 y rosendo Aviles',
        city:'Guayaquil',
        country:'Ecuador'
    }
}


showCustomerData(customer);

export {};