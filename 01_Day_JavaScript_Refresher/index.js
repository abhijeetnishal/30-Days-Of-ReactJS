let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(' ')
console.log(companies)

const arr = Array() // creates an an empty array
console.log(arr)

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]

const number = [1, 2, 3, 4, 5]
console.log(number.length) // -> 5 is the size of the array

// Getting index of an element in an array
// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.

const numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(5)) // -> 4

//Check an element if it exist in an array.

// Check items in a list
// let us check if a banana exist in the array

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana') // 0

if (index != -1) {
  console.log('This fruit does exist in the array')
} else {
  console.log('This fruit does not exist in the array')
}
// This fruit does exist in the array

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

const numb = [1, 2, 3, 4, 5]

console.log(numb.includes(5)) // true
console.log(numb.includes(0)) // false

//Getting last index of an element in array
//lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
const ar = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(ar.lastIndexOf(2)) // 7

// Checking array
// Array.isArray:To check if the data type is an array

// const numbers = [1, 2, 3, 4, 5]
 console.log(Array.isArray(numbers)) // true

//  Converting array to string
// toString:Converts array to string

// const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

//Joining array elements
//join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the 
//array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
] // List of web technologies

console.log(webTechs.join(' # ')) // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

// Slice array elements
// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

console.log(numbers.slice()) // -> it copies all  item
console.log(numbers.slice(0)) // -> it copies all  item
console.log(numbers.slice(0, numbers.length)) // it copies all  item
console.log(numbers.slice(1, 4)) // -> [2,3,4] // it doesn't include the ending position

