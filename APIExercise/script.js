"use strict";

const getOutput = document.querySelector("#getOutput");
const searchOutput = document.querySelector("#searchResults");
document.querySelector("input#searchId").addEventListener("input", (event) => {
    searchById(event.target.value);
})

document.querySelector("#deleteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = this;
    console.log("This: ", form);

    const personId = form.personId.value;
    console.log("Person:", personId);

    axios
        .delete(`https://reqres.in/api/users${personId}`)
        .then(res => {
            console.log(res);
            form.reset();
            form.firstName.focus();
            getInfo();
        })
        .catch(err => console.error(err));
});

document.querySelector("#personForm").addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("THIS:", this);

    const form = this;

const data = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    job: form.job.value,
};

axios
        .post("https://reqres.in/api/users", data)
        .then(res => {
            getInfo();
            form.reset();
            form.firstName.focus();
            console.log(res);
        })
        .catch(err => console.error(err));
});



const getInfo = () => {
axios
    .get("https://reqres.in/api/users")
    .then(response => {
        console.log("Res:", response);
        const persons = response.data.data;
        getOutput.innnerHTML = "";

        for (let person of persons) {
            const personContainer = document.createElement("div");

            const personFirstName = document.createElement("p");
            personFirstName.innerText = `First Name: ${person.first_name}`;
            personContainer.appendChild(personFirstName);

            const personLastName = document.createElement("p");
            personLastName.innerText = `Last Name: ${person.last_name}`;
            personContainer.appendChild(personLastName);

            const personId = document.createElement("p");
            personId.innerText = `ID: ${person.id}`;
            personContainer.appendChild(personId);

            const personEmail = document.createElement("p");
            personEmail.innerText = `Email: ${person.email}`;
            personContainer.appendChild(personEmail);

            getOutput.appendChild(personContainer);
        }
    })
    .catch(err => console.error(err));
}

const searchById = (filter) => {
    axios
    .get("https://reqres.in/api/users")
    .then(response => {
        console.log("Res:", response);
        const persons = response.data.data;
        getOutput.innnerHTML = "";

        for (let person of persons) {
            if (filter && "${persons.id}")
                continue;

            const searchContainer = document.createElement("div");

            const personFirstName = document.createElement("p");
            personFirstName.innerText = `First Name: ${person.first_name}`;
            searchContainer.appendChild(personFirstName);

            const personLastName = document.createElement("p");
            personLastName.innerText = `Last Name: ${person.last_name}`;
            searchContainer.appendChild(personLastName);

            const personId = document.createElement("p");
            personId.innerText = `ID: ${person.id}`;
            searchContainer.appendChild(personId);

            const personEmail = document.createElement("p");
            personEmail.innerText = `Email: ${person.email}`;
            searchContainer.appendChild(personEmail);

            searchOutput.appendChild(searchContainer);
            
        }
    
    })
    .catch(err => console.error(err));
}

getInfo();