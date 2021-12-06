"use strict";

const cN = document.querySelector("#cN");
const historyBox = document.querySelector("#historyBox");
// const minusFive = document.querySelector("#minusFive");
// const minusOne = document.querySelector("#minusOne");
// const plusOne = document.querySelector("#plusOne");
// const plusFive = document.querySelector("#plusFive");

// const minusFiveHandler = event => {
//     let num = cN.value;
//     console.log("Curr:", num);

//     const newValue = Number.parseInt(num) - 5;
//     cN.value = newValue;
//     valueHistory();
// }    

// const minusOneHandler = event => {
//     let num = cN.value;
//     console.log("Curr:", num);

//     const newValue = Number.parseInt(num) - 1;
//     cN.value = newValue;
//     valueHistory();
// }

// const resetHandler = event => {
//     cN.value = "0";
//     valueHistory();
// }

// const plusOneHandler = event => {
//     let num = cN.value;
//     console.log("Curr:", num);

//     const newValue = Number.parseInt(num) + 1;
//     cN.value = newValue;
//     valueHistory();
// }

// const plusFiveHandler = event => {
//     let num = cN.value;
//     console.log("Curr:", num);

//     const newValue = Number.parseInt(num) + 5;
//     cN.value = newValue;
//     valueHistory();
// }

const updateCounter = change => {
    if (change === "R") {
        // console.log("Curr:", cN.value);
        // console.log(typeof(cN.value));
        cN.value = 0;
        // console.log("Curr:", cN.value);
        valueHistory();
        return;
    } else {
    let num = cN.value;
    console.log("Curr:", num);

    const newValue = Number.parseInt(num) + change; // can use + regardless as "adding" a negative number is the same as minus.
    cN.value = newValue;
    valueHistory();
    }
};

const buttons = document.querySelectorAll("button.counterButton");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        const button = event.target;
        console.log(button);
        const change = parseInt(button.innerText);
        console.log(change);
        console.log(typeof(change));
        updateCounter(change);
    })
});

const valueHistory = () => {
    const p = document.createElement("p");
    p.innerText = cN.value;
    historyBox.appendChild(p);
};