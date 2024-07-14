import { IAction } from "../utils/actions.interface";

class Person{
    //propiedadesss
    public _name:string;
    public _lastname:string;//private _nommbre
    private _age:number;
    protected fulname:string;
     
   public constructor (name:string, lastname:string,age:number)
    {
        this._name = name;
        this._lastname = lastname;
        this._age = age;
        this.fulname = this._name + this._lastname;
    }

    //methods
    /**
     * Walk
     */
    public Walk():void {
        console.log(`${this._name} Estas Caminando`);
        
    }

    /**
     * talk
     */
    public talk() :void{
        console.log(`${this._name} Estas Hablando: "Naci enn el año ${this._yearBirth()}"`);
        
    }
    
     _yearBirth() {
        const currentDate = new Date();
        const yearBirth = currentDate.getFullYear() - this._age;
        return yearBirth
    }
}

class Astronaut extends Person implements IAction{
    constructor(name:string, lastname:string,age:number){
        //Herencia
        super(name,lastname,age);
    }
    piloShip(): void {
        throw new Error("Method not implemented.");
    }

    getFullname():string{
        return this.fulname;
    }
}




const juan = new Person('Juan','Lopez',5);
const astronauta = new Astronaut("Jordan","Connor",35);



juan.Walk();
juan.talk();

console.log(juan);
console.log();
astronauta.Walk()
astronauta.talk()
astronauta.piloShip()