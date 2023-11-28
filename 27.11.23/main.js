/* Exercise 1: Classes and Inheritance
Objective: Understand ES6 classes and inheritance.

Task:

Create a class Animal with a constructor that sets a name property.

Add a method speak to Animal that logs ${name} makes a sound.

Create a subclass Dog that extends Animal.

Override the speak method in Dog to log ${name} barks.

Expected Outcome:

When an instance of Dog calls speak, it should log a unique message. */
console.log('Exercise 1')
class Animal {
    constructor(name, effect){
        this.name = name;
        this.effect = effect;
    }

    speak(){
        return console.log(`${this.name} says: ${this.effect}`)
    }

}


const Dog = new Animal("Dog", "barks")
Dog.speak()


/* 
Exercise 2: Object Destructuring
Objective: Practice object destructuring.

Task:

Create an object person with properties name, age, and location.

Use object destructuring to extract name and age from the object.

Log these values separately.

Expected Outcome:

Successfully log the name and age properties of the person object.
*/

console.log('Exercise 2')

const person = {
    name:"Ivan",
    age: "25",
    place: "Siberia",
    location: "Ru"
};


const {name, age} = person;
const {place} = person;
const {location: lc } = person;

console.log(`Name is ${name}`);
console.log(`Age is ${age}`);
console.log(`Location is ${place}`);
console.log(`New location is ${lc}`)



/*  
Exercise 3: Array Destructuring
Objective: Learn array destructuring.

Task:

Create an array colors with at least three color strings.

Use array destructuring to create individual variables for the first and second colors.

Log these variables.

Expected Outcome:

The first two colors in the colors array are logged individually.
*/
console.log('Exercise 3')
const colors = ["red", "blue", "black", "green"]

const [x,y,,z ] = colors
console.log(`first color is ${x}`)
console.log(`second color is ${y}`)

/*
Exercise 4: Template Literals
Objective: Explore template literals for string interpolation.

Task:

Create variables for firstName, lastName, and age.

Use a template literal to create a full sentence introducing the person with these variables.

Log this sentence.

Expected Outcome:

A sentence combining all variables in a single string is logged. 
*/
console.log('Exercise 4')


const firstName = "Ivan";
const lastName = "Ivanov";
const years = 25;

console.log(`This person name is ${firstName}, his secondname is ${lastName} with age of ${years}`)


/*

Exercise 5: Default Parameters
Objective: Understand default function parameters.

Task:

Create a function greet that takes a name parameter.

Set a default value for name (e.g., "Guest").

Log a greeting message using the name.

Call the function with and without passing an argument.

Expected Outcome:

The function greets the given name or uses the default "Guest" if no name is provided.
*/
console.log("Exercise 5")

function greet( name = "Guest"){
   console.log(`Welcome ${name}`);
};

greet("Olena");
greet();


/*

Exercise 6: Spread and Rest Operators
Objective: Use spread and rest operators for arrays and function arguments.

Task:

Use the spread operator to combine two arrays into a new array.

Create a function sum that uses the rest operator to take any number of arguments and returns their sum.

Call sum with different numbers of arguments.

Expected Outcome:

The new array contains all elements from both arrays.

The sum function returns the correct sum for any number of arguments.

*/

function sum(...numbers){

    let total = 0;
    
    for (const number of numbers){

        total += number;
        }
    return total;
}

console.log(sum(1, 2))

// const summing = (...numbers) => numbers.reduce((prev, value) => value +prev);

// summing.call(dog)


// Functional programming concepts
/*
Exercise 1: Basic map Usage
Objective: Learn to transform array elements using map.

Task:

Create an array of numbers.

Use the map function to create a new array where each number is doubled.

Log the new array.

Expected Outcome:

An array where each element is twice the value of the corresponding element in the original array.
*/
const arrayOfNumbers = [1,2,3,4,5,6];
const arrayOfDubleNumbers = arrayOfNumbers.map(item=>item*2)
console.log("Exercise 1")
console.log(arrayOfNumbers)
console.log(arrayOfDubleNumbers)


/*
Exercise 2: Filtering with filter
Objective: Practice using filter to extract specific elements from an array.

Task:

Create an array of objects where each object has properties name and age.

Use filter to create a new array containing only objects where age is greater than 25.

Log the resulting array.

Expected Outcome:

An array of objects filtered based on the age criteria.

*/
console.log("Exercise 2")

const room = [
    {name:"Ivan", age: 12},
    {name:"Jon", age: 25},
    {name:"Betta", age: 1},
    {name:"Maria", age: 51},
    {name:"Kirill", age: 47},
]

// const newRoom = room.filter(item => item.age >= number)
const newRoom = room.filter(item => isGreater(item, 25))
console.log(newRoom)
function isGreater(item, number){

    return item.age >= number

}

/*
Exercise 3: Summation with reduce
Objective: Understand how to aggregate array data using reduce.

Task:

Create an array of numbers.

Use reduce to find the sum of all the numbers in the array.

Log the sum.

Expected Outcome:

The total sum of all numbers in the array.
*/

const array3 = [20, 10, 30, 60]

const totalArray3 = array3.reduce(function(sum, item){
    return sum + item

})
console.log(totalArray3)

/*
Exercise 4: Chaining map and filter
Objective: Combine map and filter to transform and filter array data.

Task:

Create an array of numbers.

Use map to create a new array where each number is multiplied by 3.

Then chain filter to remove any number that is not divisible by 2.

Log the final array.

Expected Outcome:

An array of numbers which have been tripled and then filtered to include only even numbers.
*/

const array4 = [10, 3, 11, 6, 76, 91, 23]

let array4Multiply = array4.map(item=> item*3)
console.log(array4Multiply)
console.log(array4Multiply.filter(item=>item % 2 == 0))

/*
Exercise 5: Complex Reduction
Objective: Perform complex operations using reduce.

Task:

Create an array of objects where each object represents a person with properties name and age.

Use reduce to calculate the average age of all people in the array.

Log the average age.

Expected Outcome:

The average age of all persons represented in the array.
*/

// const group = {
//     "tim cook":[
//         {}
//     ],
//     "Bill Gates":[

//     ]
        
// }

const group = [
    {name: "tim cook", age: 50},
    {name: "Bill Gates", age: 60},
    {name: "Mark Zuckerberg", age: 40},
    {name: "Elon Musk", age: 30},
]


let resultAverageAge = group.map(item => item.age).reduce((average, age, index)=>average + age)
console.log(resultAverageAge/group.length)
/*

Exercise 6: Currying Function
Objective: Understand and implement currying in JavaScript.

Task:

Write a curried function multiply that takes two arguments in separate function calls. For example, multiply(a)(b).

The function should return the product of the two arguments.

Test the function with different sets of arguments and log the results.

Expected Outcome:

When calling multiply(5)(3), it should return 15.

Similarly, multiply(10)(2) should return 20.

*/



let multiply = x=>y=> x*y

console.log(multiply(5)(3))

// Asynchronous programming

/*
Exercise 1: Promises Basics
Objective: Understand how to create and use Promises.

Task:

Create a function simulateAsyncTask that returns a new Promise.

This Promise should resolve with the string "Task Complete" after a delay of 2 seconds.

Use setTimeout to simulate the delay.

After creating the function, call it and use .then() to log the result to the console.

Expected Output:

After 2 seconds, "Task Complete" should be logged to the console.

*/

// console.log(setTimeout(()=>{ simulateAsyncTask(1, 1) }, 3000))

function simulateAsyncTask(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {console.log(a + b) 
        resolve()
        }, 1000)});
 }


 simulateAsyncTask(1, 1).then(() => console.log("Task Complete")
  );

// console.log( simulateAsyncTask(1, 1))
/*

Exercise 2: Async/Await with Error Handling
Objective: Learn to use async/await along with try/catch for error handling.

Task:

Create an async function fetchData that simulates retrieving data from an API.

Inside the function, use a Promise that either resolves with "Data Retrieved" or rejects with "Error in Data Retrieval", 
based on a condition (e.g., a random number).

Use async/await to call the Promise within a try/catch block.

Log the result if the promise resolves, and log the error if it rejects.

Expected Output:

Depending on the condition, either "Data Retrieved" or "Error in Data Retrieval" should be logged to the console.

*/
// const randomNumber = Math.floor(Math.random()*2) 
const randomNumber = 1
console.log("randomNumber ", randomNumber)

async function fetchData(){
    return new Promise((resolve, reject) => {
        randomNumber === 1 ? resolve("Data Retrieved") : reject("Error in Data Retrieval");
       
    })     
    
}
// console.log(fetchData())
fetchData().then((resolve)=>{
    console.log(resolve)
}).catch((error)=>{
    console.log(error)
})

/*

Exercise 3: Handling Multiple Asynchronous Operations
Objective: Manage multiple asynchronous operations with Promise.all.

Task:

Create multiple functions returning Promises that resolve after different delays (e.g., 1 second, 3 seconds, etc.).

Use Promise.all to execute all these functions simultaneously.

Log the results when all Promises resolve.

Add error handling to log if any of the Promises reject.

Expected Output:

An array of results from all Promises, logged to the console once all Promises resolve, or an error message if any of them reject.
*/


const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'promise1');
  });
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'promise2');
  });
//   let promise3
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'promise3');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
}).catch((error)=>{
    console.log(error)
})