const formatValue =(value:string | number | boolean):string | number | boolean =>{
    if(typeof value === "string"){
        return value.toUpperCase();
    }
    else if(typeof value === "number"){
        return value*10;
    }
    else return !value;
}

const getLength =(value:string | number[]):number => {
    if(typeof value === "string")
        return value.length;
    else if(Array.isArray(value))
        return value.length;
    return 0;
}

class Person {
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name= name;
        this.age = age;
    }
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }

}

const filterByRating = (items:{title:string,rating:number}[]) =>{
    return items.filter((item)=> {
      if (item.rating < 0 || item.rating > 5) {
      throw new Error(`Invalid rating for ${item.title}: ${item.rating}`);
    }
    return item.rating >= 4;
    })
}

const filterActiveUsers = (users:{
    id:number,
    name:string,
    email:string,
    isActive:boolean,
}[]):{
    id:number,
    name:string,
    email:string,
    isActive:boolean,
}[] =>{
    {
    return users.filter((user)=> user.isActive=== true)
}
}

interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}

const printBookDetails = (book:Book) =>{
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`);
    
}

const getUniqueValues = (
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] => {
  const result: (number | string)[] = [];
  for (let i = 0; i < arr1.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr1[i]) {
        exists = true;
        break;
      }
    }
    if (!exists) result.push(arr1[i] as number | string);
  }
  for (let i = 0; i < arr2.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr2[i]) {
        exists = true;
        break;
      }
    }
    if (!exists) result.push(arr2[i] as number | string);
  }

  return result;
};

const calculateTotalPrice = (products:{
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}[]):number =>{
    if (products.length === 0) return 0;
    else{
          const result= products.map((product)=>{
        if(product.discount && product.discount >= 0 && product.discount <= 100)
       return product.price*product.quantity*(1-(product.discount/100));
        else    
        return  product.price*product.quantity;
    })
    const total = result.reduce((sum, current) => sum + current, 0); 
    return total;
    }
}
