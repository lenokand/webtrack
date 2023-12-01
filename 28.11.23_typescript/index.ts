const a:number = 1;
const b:number = 2;

function summ (a:number, b:number ) :number{
    return a+b
}

summ(a, b)

console.log("Objective: Learn to define and use interfaces.")

type Person = {
    readonly id:number,
    name: string,
    age:number,
    ocupation?: string
}
interface Person2{
    name: string,
    age?:number
}
const worker2 : Person2 = {
    name: "",
    age: 2
}

const worker1 : Person = {
    id:1,
    name: "Name",
    age: 19,
    // ocupation: "Sale"
}
function showDescription (persone : Person):void {
    console.log(`Person name is ${persone.name} age of ${persone.age} work as ${persone?.ocupation}`)
    }

showDescription(worker1)

console.log(worker1)


 console.log("Ex 3")

  enum Color{red="red", black="black", blue="blue", white="white"}
  enum ColorNoValue{red, black, blue, white}

let color = ColorNoValue.black
console.log(color)
console.log("typescript");

let result : number | string;

function showType( x : number|string):any {
    
    return typeof x
}
console.log("showType(color)", showType(color))



console.log("Generics")
function identity<Type>(arg: Type): Type {
   
    return arg;
  }
  const arrNum=[1,2,3]
  const arrStr=["1","2","3"]
  console.log(identity(arrNum))
  console.log(identity(arrStr))

let age: number = 20;
if (age < 50){
    age +=10
}
   
let sales = 123_456_789;
let course = "Typescript";
let is_Publiched = true;
let level;
level = 1;

function render(document: any){
    console.log(document)
}

let numbers:number[] = [1, 2, 3];
numbers[3] = 1;

numbers.forEach(element => {
    element.toString()    
});

// 1, Name

let user: [number, string]=[1, 'Tom'];
user[1]

const small =1;
const medium =2;
const larfe =3;
