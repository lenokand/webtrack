"use strict";
const a = 1;
const b = 2;
function summ(a, b) {
    return a + b;
}
summ(a, b);
console.log("Objective: Learn to define and use interfaces.");
const worker1 = {
    id: 1,
    name: "Name",
    age: 19,
};
function showDescription(persone) {
    console.log(`Person name is ${persone.name} age of ${persone.age} work as ${persone === null || persone === void 0 ? void 0 : persone.ocupation}`);
}
showDescription(worker1);
console.log(worker1);
console.log("Ex 3");
var Color;
(function (Color) {
    Color["red"] = "red";
    Color["black"] = "black";
    Color["blue"] = "blue";
    Color["white"] = "white";
})(Color || (Color = {}));
var ColorNoValue;
(function (ColorNoValue) {
    ColorNoValue[ColorNoValue["red"] = 0] = "red";
    ColorNoValue[ColorNoValue["black"] = 1] = "black";
    ColorNoValue[ColorNoValue["blue"] = 2] = "blue";
    ColorNoValue[ColorNoValue["white"] = 3] = "white";
})(ColorNoValue || (ColorNoValue = {}));
let color = ColorNoValue.black;
console.log(color);
console.log("typescript");
let result;
function showType(x) {
    return typeof x;
}
console.log("showType(color)", showType(color));
console.log("Generics");
function identity(arg) {
    return arg;
}
const arrNum = [1, 2, 3];
const arrStr = ["1", "2", "3"];
console.log(identity(arrNum));
console.log(identity(arrStr));
let age = 20;
if (age < 50) {
    age += 10;
}
let sales = 123456789;
let course = "Typescript";
let is_Publiched = true;
let level;
level = 1;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
numbers[3] = 1;
numbers.forEach(element => {
    element.toString();
});
let user = [1, 'Tom'];
user[1];
const small = 1;
const medium = 2;
const larfe = 3;
//# sourceMappingURL=index.js.map