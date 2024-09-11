// alert("Connected")
let food = document.getElementById("fruit");
console.log(food);
food.style.color = "blue";
food.style.border = "blue ridge 15px";

let food2 = document.getElementsByClassName("breakfast");
console.log(food2);

let food3 = document.getElementsByTagName("li")
console.log(food3[2]);
console.log(food3[1].textContent);
food3[1].textContent = "sold out";


let food4 = document.querySelector(".breakfast")
console.log(food4);

let food5 = document.querySelectorAll("h1");
console.log(food5);

let ul = document.querySelectorAll("ul");

let li = document.querySelector("li");
li.innerHTML = "Chocolate <b>Yummy!";

let input = document.querySelectorAll("input");
// input.setAttribute("type", "password");
console.log(input.value);

let sub = document.querySelector('button[type="submit"]');
sub.addEventListener("click", (event) => {
    event.preventDefault();
    // let fName = input[0].value;
    // let lName = input[1].value;
    // let age = input[2].value;
    let person = {
        fName: input[0].value,
        lName: input[1].value,
        age:Number(input[2].value)
    }
    let str = JSON.stringify(person);
    console.log(str);
    input.value = "";
    
});