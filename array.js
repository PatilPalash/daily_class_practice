// let arr = [1, 2, 3, 4, 5]

// --------- includes()

// console.log(arr.includes(2))

// ------------- lastIndexOf

// let fruits = ['banana','orange','apple','banana','kiwi','banaba']
// console.log(fruits.lastIndexOf('banana'))

// ----------- findIndex
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// return the index of the first element in the array that satisfies the provided testing function

// whenever you give a function as an argument to a function, that is known as a callback function.

// function cb(){   //callback function
//     // conditions
// }
// let result = arr.findIndex(cb)


// due to findIndex() the callback function will execute for each element in array
// function greaterThan4 (element){  //return a boolean value (true / false)
//     return element > 4
// }

// let result = arr.findIndex(greaterThan4)


// ----------- CONCAT
// let arr1 = ['a','b','c']
// let arr2 = ['b','e']

// let arr3 = arr1.concat(arr2)

// console.log(arr3)


// ------------ toString

// const arr = [1, 2, 'a','1a'];

// let result = arr.toString()

// console.log(result)


// ------------ JOIN

// let fruits = ['apple','banana','orange']

// let result = fruits.join('_ ')
// let result = fruits.join('')
// let result = fruits.join(' ')

// let result = fruits.join()
// console.log(result)


// ----------- SOME

// let arr = [1, 2, 3, 4, 5]

// function isEven (element){  //if the element is even or not
//     if(element % 2 === 0){
//          return true
//     }
//     return false
// }

// element  % 2 === 0 -----> True, False
// function isEven (element){  //testing condition
//          return element % 2 === 0  
// }

// let result = arr.some(isEven)
// console.log(result)

// ano function
// let result = arr.some(function (element){
//     return element % 2 === 0
// })
// console.log(result)


//
// let result = arr.some(element => element % 2 === 0)
// console.log(result)


// ------------ EVERY -  return true if EVERY element of the arry satisies the given condition
// let arr = [2, 4, 6, 8,]

// let result = arr.every(item => item % 2 === 0)
// console.log(result)

// Q - exp

// let arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.some(y => y < 2)) // ture 
// console.log(arr.some(y => y > 6)) // false

// let str = 'string'
// console.log(str.length)


// let fruits = ['apple','orange','banana','pear']
// console.log(fruits.some(item => item.length < 5)) //true

// ------------ FILTER - return a new array with the elemnts that satisfy the given condition

// let arr = [1, 2, 3, 4, 5]
//  function isGreaterThan3(element){
//      return element > 3
//  }

//  let resultArray = arr.filter(isGreaterThan3)

// let resultArray = arr.filter(element => element >= 3)

// console.log(resultArray)
// filter out odd elements

// let oddElems = arr.filter(item => item % 2 !== 0)
// console.log(oddElems)


// --------------- Map - returns a new array populated with the results of the callback function

// let arr = [1, 2, 3, 4, 5]

// ------- normal way

// let newArr = []; //doubled values
// for(let i=0; i<arr.length; i++){
//     newArr.push(arr[i] * 2)
// }
// console.log(newArr)

// ------ using map()

// function double (item){
//     return item * 2
// }
// let newArr = arr.map(double)
// let newArr = arr.map(element => element * 2)
// console.log(newArr)


// question - return a new array which adds 5 to each element
// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.map(e => e + 5)
// console.log(newArr)

// - ------- FOREACH - executes a provided function once for EACH elementin in the array

// let arr = [1, 2, 3, 4, 5]

// using for loop 
// for (let i = 0; i< arr.length; i++){
//     console.log(arr[i] * 2)
// }

// forEach 
// arr.forEach(item => {
//     console.log(item * 2)
// })

// using forEach calculate the sum of element in arr

// let arr = [1, 2, 3, 4, 5]

// let sum = 0
// for (let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum)

// let sum = -
// arr.forEach(item => {
//     sum += item  // sum = sum + item
// })

// console.log(sum)

// ----------- REDUCE ---- return a single value
// reduce function reduces the array to a single value
// [1, 2, 3, 4, 5] to a single value-> 15
// reduce return single value
// reduce has 2 arguments (callback, initialValue of accumulator)
// cb(acc , curr){
//     ...
//     return acc
// }
// accumulator, current, initial value

// let arr = [1,2,3,4,5]

// let initialValue = 0
// let result = arr.reduce(function (){
//     accumulator = accumulator + current // accumulator += current
//     return accumulator
// }, initialValue)

let arr = [1,2,3,4,5,6]
// let squaredArr = arr.map(item => item * item) //squaring arr 

// let evenSquares = squaredArr.filter(item => item % 2 === 0) // filtering out even values

// let sumOfEvenSquares = evenSquares.reduce((acc, curr) => {
//     acc += curr
//     return acc
// }, 0)

// console.log(sumOfEvenSquares)

// let sumOfEvenSquares = arr.map(item => item * item).filter(item => item % 2 === 0).reduce((acc, curr) =>{
//     acc += curr
//     return acc
// }, 0)
// console.log(sumOfEvenSquares)

// question
// let salary = [100, 200, 300, 400, 500, 600]

// filter out salaries greater than 300

// double the filterd salaries

// find out the total salary