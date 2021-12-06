"use strict";

let str1 = "Hello World"

let colourText = "This is coloured text"

console.log(str1);
console.log("This is a message: %c *** with some text" + colourText, "color: red; font-style: bold, background-color: grey; font-family: fantasy;");

function isEven(num1){
    if(num1 % 2 === 0){
        return "Hello";
    } else {
        return false;
    }
}

function subtract(num1, num2){
    return num1 - num2;
}

// const welcome = function(name, age, gender){
//     console.log("My name is " + name + ", I am " + age + " years old and I am " + gender);
// }

const powerUp = (n1, n2) => Math.pow(n1, n2);

let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;

// alert(name);
// alert(age);
// alert(isAdmin);

const increment = input => input += 10;

const userInput = num => {
    let input = parseInt(prompt("Please enter a number:"));
    return num(input);
}

alert(userInput(increment));
10


let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";

let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

let highestGrade = maxGrade;
let lowestGrade = minGrade;
let highestMGrade = maxGrade(getBoys(grades));
let highestFGrade = maxGrade(getGirls(grades));
let lowestMGrade = minGrade(getBoys(grades));
let lowestFGrade = minGrade(getGirls(grades));