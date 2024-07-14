//Creada eel modelo 
interface IProduct{
    id:number,
    title:string,
    price:number,
    description:string,
    image:string,
    stock:number
}

//Creamos los objetos
const product1:IProduct={
    id:1,
    title:"Majestic Mountain Graphic T-Shirt",
    price:10,
    description:"black short sleeve t-shirt",
    image:'https://i.imgur.com/QkIa5tT.jpeg',
    stock:0
}

const product2:IProduct={
    id:2,
    title:"Classic Red Pullover Hoodie",
    price:40,
    description:"black short sleeve t-shirt",
    image:'https://i.imgur.com/QkIa5tT.jpeg',
    stock:5

}

const product3:IProduct={
    id:3,
    title:"Majestic Mountain Graphic T-Shirt",
    price:10,
    description:"black short sleeve t-shirt",
    image:'https://i.imgur.com/QkIa5tT.jpeg',
    stock:6

}

const product4:IProduct={
    id:4,
    title:"Classic Heather Gray Hoodie",
    price:60,
    description:"black short sleeve t-shirt",
    image:'https://i.imgur.com/QkIa5tT.jpeg',
    stock:2

}

//ARRAY OBJETOS
const products: IProduct[]= [product1,product2,product3,product4];

//Metodo PARA MOSTRAR MI INFORMCIO DE PRODUCTOSS
const showProduct = (product:IProduct)=>{
    console.log('**************Los Productos del marketplace: **************');
    console.log(`Id: ${product.id}`);

    console.log(`Producto: ${product.title}`);
    console.log(`Precio: ${product.price}`);
    console.log(`Descripcion: ${product.description}`);
    console.log(`Imagen: ${product.image}`);

}

 showProduct(product1)
  showProduct(product2)
 showProduct(product3)
 showProduct(product4)

//destructuracion de ARRAY OBJETOS para mostrar todos los productos 

const {id,title,price,description,image} = product3

console.log('**************Los Productos del marketplace: (destructurando object) **************');

console.log(`Id: ${id}`);
console.log(`Producto: ${title}`);
console.log(`Precio: ${price}`);
console.log(`Descripcion: ${description}`);
console.log(`Imagen: ${image}`);

const [item1  ,item2,item3,item4 ]= products;

    console.log('**************Los Productos del marketplace: (destructurando Array object) **************');

    console.log(`0:`,item1);
    console.log(`1:`,item2);
    console.log(`2:`,item3);
    console.log(`3:`,item4);
    
    
    // functions arregglos
    //Mostrar los productos > 3
    const productStock = products.filter((product)=>{
        return product.stock >=5;
    });
    
    console.log("Productos (stock > 3)",productStock)
    

export {};