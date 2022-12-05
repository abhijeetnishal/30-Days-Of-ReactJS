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

