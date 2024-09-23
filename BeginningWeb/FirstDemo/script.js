let person = {
    fName: "George",
    lName: "Of the Jungle",
    age: 24,
    married: true,
    animals: [

    ]

}

//destructure
let {fName, lName, age, animals} = person;

// let fName = person.fName;
// let lName = person.lName;
// let age = person.age;
console.log(`${fName} ${lName} is ${age} years old.`);

