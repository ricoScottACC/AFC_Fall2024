// Menu begin
let food = [
    {name: 'Pollo Taco', 
     description: 'The best chicken tacos in the world!',
     price: new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'USD'}).format(1.55,),
     src: "assets/chicTaco.jpg",
     alt: "Pollo Taco"
    },
    {name: 'Chicken Bucket', 
     description: 'Our famous bucket of 10 chicken legs.',
     price: new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'USD'}).format(12.50,),
     src: "assets/bucket.jpg",
     alt: "Chicken Bucket"
    },
    {name: 'Big as Yo Face Pollo Burrito', 
     description: 'The best chicken burrito in the world!',
     price: new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'USD'}).format(7.50,),
     src: "assets/Burrito.JPG",
     alt: "Big as Yo Face Pollo Burrito"
    }];

let menuPic = document.getElementById("menuPic");
menuPic.src = food[0].src;
menuPic.alt = food[0].alt;

let foodName = document.getElementById("foodName");
foodName.textContent = food[0].name;
    
let foodDescription = document.getElementById("foodDescription");
foodDescription.textContent = "Description: " + food[0].description;

let foodPrice = document.getElementById("foodPrice");
foodPrice.textContent = "Price: " + food[0].price;

let tracker = 0;

let prev = document.getElementById("prev");
prev.addEventListener("click", prevImage);

let next = document.getElementById("next");
next.addEventListener("click", nextImage);

function prevImage() {
    if (tracker > 0){
        menuPic.src = food[--tracker].src;
        menuPic.alt = food[tracker].alt;
        foodName.textContent = food[tracker].name;
        foodDescription.textContent = "Description: " + food[tracker].description;
        foodPrice.textContent = "Price: " + food[tracker].price;
    }
}

function nextImage() {
    if (tracker >= 0 && tracker <= 1){
        menuPic.src = food[++tracker].src;
        menuPic.alt = food[tracker].alt;
        foodName.textContent = food[tracker].name;
        foodDescription.textContent = "Description: " + food[tracker].description;
        foodPrice.textContent = "Price: " + food[tracker].price;
    }
}