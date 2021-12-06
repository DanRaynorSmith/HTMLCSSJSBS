"use strict";

const onSuccess = res => console.log("Success:", res);
const onFailure = res => console.error("Failure:", err);
const output = document.querySelector("section#superheros");

axios
    .get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(response => {
        const heros = response.data;
        console.log("Res:", response);

        const name = document.createElement("h3");
        for(let name of heros.members.name)
        name.innerText = heros.name;
        output.appendChild(name);



    })
    // .catch(err => console.error(err);