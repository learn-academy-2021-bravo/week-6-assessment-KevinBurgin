// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { expect } = require("@jest/globals")

// const { expect } = require("@jest/globals")

// const { expect } = require("@jest/globals")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

describe('cap', () =>{
  test('returns an array with a sentence about each person with their names capitalized', () => {
    expect(cap(people)).toEqual(["Ford Prefect is a hitchhiker", "Zaphod Beeblebrox is a president of the galaxy", "Arthur Dent is a radio employee"])
  })
})

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

const cap = (array) => {
  //initiate a variable set to empty array
  let newArr=[]
  //create for loop to iterate over array
  for(let i=0; i<array.length; i++){
  //use .split method and then map to return uppercase first letter then add the rest of word with slice
    let capName=array[i].name.split(' ').map(str =>{
      return str[0].toUpperCase() +str.slice(1)
  // use join method 
    }).join(' ')
  //push everything into empty array and string interpolation to create sentance
    newArr.push(`${capName} is a ${array[i].occupation}`)
    
  }
  //retrun new array
  return newArr
}
console.log(cap(people))
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe('remain', () => {
  test('returns an array of only the REMAINDERS of the numbers when divided by 3', ()=>{
    expect(remain(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remain(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.

const remain= (array) => {
//use filter to iterate over array and set to variable, and filter out anything that isnt a datatype of number
    let filArr= array.filter(value => typeof value  === 'number')
//then map over the filtered array and use modulo 3 and return
    return filArr.map(value => value % 3)
}
console.log(remain(hodgepodge1))


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.


// a) Create a test with an expect statement using the variables provided.

describe('sumAll', () => {
    test('returns the sum of all the numbers cubed', () => {
      expect(sumAll(cubeAndSum1)).toEqual(99)
      expect(sumAll(cubeAndSum2)).toEqual(1125)
    })
})
var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.
const sumAll = (array) => {
//map over array and return value cubed and set it t variable
    let a= array.map(value =>{
      return value**3
    })
//use join method and evaluate 
    return eval(a.join('+'))
}
console.log(sumAll(cubeAndSum1))
console.log(sumAll(cubeAndSum2))
