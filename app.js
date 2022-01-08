
document.addEventListener('DOMContentLoaded', function() {
//This is array of objects
const people = [
    {
        name:"John",
        age:34,
        city:"New York"
    },
    {
        name:"Bob",
        age:23,
        city:"New York"
    },
    {
        name:"Alice",
        age:34,
        city:"New York"
    }
]

const colors = ["red", "green", "blue"]

//Load the data from the array

for(let i = 0; i < people.length; i++){
    
    let person = people[i];
    console.log(person);
    let personDiv = document.createElement("div");
    personDiv.classList.add("person");
    if(person.age > 30){
        personDiv.style.color = colors[0];
    }else{
        personDiv.style.color = colors[1];
    }
    personDiv.innerHTML = `<h2>${person.name}</h2>
    <p>Age: ${person.age}</p>
    <p>City: ${person.city}</p>`;
    document.body.appendChild(personDiv);
}

});


