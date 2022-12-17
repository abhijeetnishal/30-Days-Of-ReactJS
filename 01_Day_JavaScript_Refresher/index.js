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

// Splice method in array
// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

console.log(numbers.splice()) // -> remove all items
console.log(numbers.splice(0, 1)) // remove the first item
console.log(numbers.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// Adding item to an array using push
// Push: adding item in the end. To add item to the end of an existing array we use the push method.

// syntax
// const arr = ['item1', 'item2', 'item3']
arr.push('new item')
console.log(arr)
// ['item1', 'item2','item3','new item']

// Removing the end element using pop
// pop: Removing item in the end.

// const numbers = [1, 2, 3, 4, 5]
numbers.pop() // -> remove one item from the end
console.log(numbers) // -> [1,2,3,4]

// Removing an element from the beginning
// shift: Removing one array element in the beginning of the array.

// const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> remove one item from the beginning
console.log(numbers) // -> [2,3,4,5]

// Add an element from the beginning
// unshift: Adding array element in the beginning of the array.
// const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0) // -> add one item from the beginning
console.log(numbers) // -> [0,1,2,3,4,5]

// Reversing array order
// reverse: reverse the order of an array.

// const numbers = [1, 2, 3, 4, 5]
numbers.reverse() // -> reverse array order
console.log(numbers) // [5, 4, 3, 2, 1]

// Sorting elements in array
// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]


// Array of arrays
// Array can store different data types including an array itself. Let us create an array of arrays

const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
]
console.log(arrayOfArray[0]) // [1, 2, 3]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack) // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length) // 2
console.log(fullStack[0]) // ["HTML", "CSS", "JS", "React", "Redux"]


//if 
//else if
//else 
//same as cpp
