// let pets = ['Taco', 'Frank', 'Dog', 'Taco',]
// console.log(pets[0])
// console.log(pets)
// console.log(pets.length)
// let num = pets.length + 3

// let lastPet = pets[pets.length - 1]
// console.log(pets.toString())
// console.log(pets.join(', '))
// let taco = pets.indexOf('Taco', 1)
// let doggo = pets.indexOf('Doggo')
// console.log('Taco index ' + taco)
// console.log(doggo)
// pets.push('MonkeyButt') //adds to end
// console.log(pets.length)
// pets.pop() //renoves from end and stores in variable
// console.log(pets)
// console.log(monkeyButt)
// pets.shift() //removes from the front
// pets.unshift()//adds to the front
// pets.slice(1,3) //selects elements to pull from (start, end(not included))

// let numbers = [1, '21', 3, 4, 5]
// for(let i = 0; i < numbers.length; i++){
//     numbers[i] *= 2
// }
// console.log(numbers)

let pets = ['Dog2', 'dog', 'Dog3']
pets.forEach(element => {
    console.log(element)
})

let numbers = [1, 2, 3, 4]
let square = numbers.map( numbers => numbers*numbers)
console.log(square)
console.log(numbers)
console.log(pets.sort()) //sorts by ascii
let newNumbers = numbers.sort((a, b) => b-a)
console.log(newNumbers)

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
let longWords = words.filter(thisWord => thisWord.length > 6)
console.log(longWords)

//object
let person = {
    name: 'Walter White',
    age: 50,
    city: 'Albuquerque',
    hobbies: 'Cooking'
}
person.name //dot notation
person['name'] //bracket notation