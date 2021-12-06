"use strict";

const firstNum = document.querySelector("input#fNum");
const secNum = document.querySelector("input#sNum");
const buttons = document.querySelectorAll("button.opButton");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        // const button = event.target.id;
        // const change = button.id;
        operation(event.target.id);
    })
});

const operation = change => {
    let num1 = parseInt(firstNum.value);
    let num2 = parseInt(secNum.value);

    switch (change) {
        case "addition": 
           document.getElementById("result").value = num1 + num2;
           break;
        case "subtraction":
            document.getElementById("result").value = num1 - num2;
            break;
        case "multiply":
            document.getElementById("result").value = num1 * num2;
            break;
        case "divide":
            document.getElementById("result").value = num1 / num2;
            break;
        default:
            break;
    }
};