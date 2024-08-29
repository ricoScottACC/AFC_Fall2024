// 1. Declare a variable named `age` and assign it the value 25
let age = 25

// 2. Declare a variable named `name` and assign it your name
let name = 'Rico'

// 3. Declare a variable named `isStudent` and assign it the value true
let isStudent = true

// 4. Reassign the value of `age` to 30
age = 30

// 5. Declare two variables `firstName` and `lastName`, and assign them values. Then, create a third variable `fullName` that concatenates both.
let firstName = 'Rico'
let lastName = 'Scott'
let fullName = firstName + ' ' + lastName

// 6. Create an array named `colors` with the values 'red', 'green', and 'blue'
let colors = ['red', 'green', 'blue']

// 7. Access the first element of the `colors` array and assign it to a variable `firstColor`
let firstColor = colors[0]

// 8. Change the second element of the `colors` array to 'yellow'
colors[1] = 'yellow'

// 9. Add 'purple' to the end of the `colors` array
colors.push('purple')

// 10. Find the length of the `colors` array and assign it to a variable `colorsLength`
let colorsLength = colors.length

// 11. Create an object named `person` with properties `name` (string), `age` (number), and `isStudent` (boolean)
let person = {
    name : 'John',
    age : 117,
    isStudent : false
}

// 12. Access the `name` property of the `person` object and assign it to a variable `personName`
let personName = person.name

// 13. Change the `age` property of the `person` object to 35
person.age = 35

// 14. Add a new property `hobby` with the value 'reading' to the `person` object
person.hobby = 'reading'

// 15. Delete the `isStudent` property from the `person` object
delete(person.isStudent)

// 16. Write an if statement that checks if `age` is greater than 18, and if so, log "Adult" to the console
if (person.age > 18){ 
    console.log("Adult")
}

// 17. Write an if-else statement that checks if `isStudent` is true, and if so, log "Student" to the console, otherwise log "Not a student"
if (person.isStudent){ 
    console.log('Student')
}
else {
    console.log('Not a student')
}

// 18. Write an if-else if-else statement that checks if `age` is less than 13, log "Child", if age is between 13 and 19 log "Teenager", otherwise log "Adult"
if (person.age < 13){ 
    console.log('Child')}
else if (person.age > 12 && person.age < 20){
    console.log('Teenager')}
else{
    console.log('Adult')} 

// 19. Write a condition using the logical AND operator to check if `age` is greater than 18 and `isStudent` is true, and if so, log "Adult Student"
if (person.age > 18 && person.isStudent){
    console.log('Adult Student')}

// 20. Write a condition using the logical OR operator to check if `age` is less than 13 or `age` is greater than 65, and if so, log "Discount Eligible"
if (person.age < 13 || person.age > 65){
    console.log('Discount Eligible')}
    
// 21. Create an array named `students` containing three objects, each with properties `name` (string) and `age` (number)
let students = [
    {name: 'John',
     age: 117
    },
    {name: 'Zero',
     age: 0
    },
    {name: 'Cool',
     age: 1337
    }]

// 22. Access the `name` property of the second object in the `students` array and assign it to a variable `secondStudentName`
let secondStudentName = students[1].name

// 23. Change the `age` property of the first object in the `students` array to 20
students[0].age = 20

// 24. Loop through the `students` array and log each student's name to the console
for (let i = 0; i < students.length; i++){
    console.log(students[i].name)
}

// 25. Write a nested if statement that checks if the first student's age is greater than 18, and if so, checks if the student is also named "John", then logs "Adult John" to the console
if (students[0].age > 18){ 
    if (students[0].name === 'John'){
        console.log('Adult John')
    }
}

// 26. Create two variables `num1` and `num2`, assign them any numbers, then create a variable `sum` that holds the sum of `num1` and `num2`
let num1 = 42
let num2 = 7
let sum = num1 + num2

// 27. Create a variable `temperature`, write a conditional statement that checks if the temperature is above 30, logs "Hot", if between 15 and 30 logs "Warm", and if below 15 logs "Cold"
let temperature = 14
if (temperature > 30){
    console.log('Hot')
}
else if (temperature < 31 && temperature > 14){
    console.log('Warm')
}
else {
    console.log('Cold')
}

// 28. Create an array `shoppingList` with the items 'milk', 'bread', 'eggs', then add 'butter' to the list
let shoppingList = ['milk', 'bread', 'eggs']
shoppingList.push('butter')

// 29. Create an object `favoriteMovies` with properties `title` (string) and `year` (number). Assign values to these properties.
let favoriteMovies = {
    title: '',
    year: 0
}
favoriteMovies.title = 'Finding Nemo'
favoriteMovies.year = 2003

// 30. Create a variable `grade`, write a conditional statement that classifies the grade as "A" for 90-100, "B" for 80-89, "C" for 70-79, "D" for 60-69, and "F" for below 60
let grade = 59
function getLetterGrade(grade){
    if (grade > 89 && grade < 101){
        grade = 'A'}
    else if (grade > 79 && grade < 90){
        grade = 'B'}
    else if (grade > 69 && grade < 80){
        grade = 'C'}
    else if (grade > 59 && grade < 70){
        grade = 'D'}
    else {
        grade = 'F'}
    return grade
}