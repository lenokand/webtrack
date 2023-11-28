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



