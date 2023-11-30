const a:number = 1;
const b:number = 2;

function summ (a:number, b:number ) :number{
    return a+b
}
    
summ(a, b)

console.log("Objective: Learn to define and use interfaces.")
type Persone = {
    name: string,
    age:number,
    ocupation?: string
}

const worker1 : Persone = {
    name: "Name",
    age: 19
}
console.log(worker1)

console.log("typescript");

let age: number = 20;
if (age < 50)
    age +=10
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

numbers.forEach(element => {element.toString()
    
});

// 1, Name

let user: [number, string]=[1, 'Tom'];
user[1]

const small =1;
const medium =2;
const larfe =3;
