let img = document.getElementsByTagName("img");
img[0].style.height = "600px";
img[0].style.width = "900px";
img[0].setAttribute("src", "https://images.dog.ceo/breeds/pitbull/dog-3981540_1280.jpg");
// access button
let button = document.getElementsByTagName("button");
// assign listener
button[0].addEventListener("click",()=>{
// consume api

    // 1. endpoint - https://dog.ceo/api/breeds/image/random
    // 2. json or XML - json
    // 3. how much Data - 1 object
    // 4. what data looks like - 2 things, message = potential image, success

    // http request
    // 1. utilize the endpoint with correct method (verb)
    // 2. get a response: if ok, parse the data, else error
    // 3. do something with the parsed data
    // 4. handle the error
    const baseURL = "https://dog.ceo/api/breeds"
    let route = "image/random";
    let endpoint = `${baseURL}/${route}`;
    fetch(endpoint)
     .then((response) => {
        console.log(response);
        
        if(response.ok){
            return response.json();
        } else {
            throw Error("I broke it");
        }
    })

    .then((data) => {
        img[0].setAttribute("src", data.message)
        console.log("Data: ", data);
        
    })
    .catch((error) => {
        console.log(error); 
    });
});