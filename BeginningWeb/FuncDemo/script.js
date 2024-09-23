function nameOfFunction() {}

nameOfFunction();



function areaRectangle(length = 5, width = 5) {
  return length * width;
}
let result = areaRectangle(undefined, 2);
console.log(result);

//anonymous function
(function () {
  console.log("What is this madness?");
})();

function addPossession(element) {
  console.log(element + "'s");
}


function greeting() {
    console.log("Hello there.");
    return true;
  }
  greeting();
//pointer function
let greet = () => {
    console.log('hi');
}
greet()

// let area = (length, width) => length * width;
let area = (length, width) => (length *= 2, length * width);
console.log(area(6,5));

let greetAgain = (arg) => `Hello, ${arg}`;
console.log(greetAgain("Rico"))

let animals = ["Dog", "Cat", "Catdog"];
let multiples = (animals) => {
    let newAnimals = []; 
    animals.forEach(el => newAnimals.push(el + "'s"));
    return newAnimals;
}
let manyAnimals = multiples(animals);
console.log(manyAnimals[manyAnimals.length - 1]);