let input = document.querySelectorAll("input");
let state = document.querySelector("select");

let moreInfo = document.getElementById("additionalInfo");
moreInfo.rows = 4;
let maxchar = 30;
moreInfo.maxLength = 30;

function validateForm() {
    let age = Number(document.getElementById("age").value);
    let ageError = document.getElementById("age-error");

    let phone = document.getElementById("phone").value;
    let phoneFormat = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    let phoneError = document.getElementById("phone-error");

    ageError.textContent = "";
    phoneError.textContent = "";

    let isValid = true;

    if (isNaN(age) || age < 21 || age > 99) {
        ageError.textContent = "Must be between 21 and 99.";
        isValid = false;
    }

    if (phone === "" || !phone.match(phoneFormat)){
        phoneError.textContent = "Enter a valid phone number.";
        isValid = false;
    }

    let sub = document.querySelector('button[type="submit"]');
    sub.addEventListener("click", (event) => {
        event.preventDefault();
    let person = {
        fName: input[0].value,
        lName: input[1].value,
        phone: input[2].value,
        add1: input[3].value,
        add2: input[4].value,
        city: input[5].value,
        state: state.value,
        zip: input[6].value,
        age: Number(input[7].value),
        married: input[8].checked,
        single: input[9].checked,
        complicated: input[10].checked,
        email: input[11].value,
        password: input[12].value,
        info: moreInfo.value,
        likesRed: input[13].checked,
        likesBlue: input[14].checked,
        likesBlack: input[15].checked,
        likesPurple: input[16].checked,
        likesTeal: input[17].checked
    }
    let str = JSON.stringify(person);
    console.log(str);
    input.value = ""; 
    });

    return isValid;
};

let countMessage = document.getElementById("count-message");
countMessage.textContent = maxchar;
    
moreInfo.addEventListener("keydown",count);

function count(e){
    var len =  moreInfo.value.length;
    if (len >= maxchar){
       e.preventDefault();
    } else{
       countMessage.textContent = maxchar - len-1;   
    }
};


