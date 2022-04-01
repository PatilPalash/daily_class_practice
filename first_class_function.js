// First class functions - functions in that language can be treated like variables


// const greetings = function() {
//     console.log('hello there')
// }

// function random(callBack) {
//     callBack() //hello there
// }

// random(greetings)


// greetings-------- callBack function
// random ------------- Higher order function

// higher order function takes in callback as an argument



// function tenSquared () {
//     return 10 * 10
// }

// function nineSquared() {
//     return 9*9
// }

// DRY principle - Do Not Repeat Yourself

// function square(n) {
//     return n*n
// }

// console.log(square(4))

// let arr = [1, 2, 3, 4]

// function copyArrayMultiplyBy2(array) {
//     const output = []
//     for (let i = 0; i < array.length; i++) {
//         output.push(array[i] * 2)
//     }
//     return output
// }

// console.log(copyArrayMultiplyBy2(arr))

// copyArrayAdd2(arr)

// function copyArrayMultiplyBy2(array) {
//     const output = []
//     for (let i = 0; i < array.length; i++) {
//         output.push(array[i] + 2)
//     }
//     return output
// }

// Dry principle is broken




// let arr = [1, 2, 3, 4]

// function copyArrayAndManipulate(array, instructions) {
//     let output = []

//     for (let i = 0; i < array.length; i++) {
//         output.push(instructions(array[i]))
//     }

//     return output
// }

// //instructions
// function multiplyBy2(input) {
//     return input * 2
// }
// function add2(input) {
//     return input + 2
// }

// console.log(copyArrayAndManipulate(arr, multiplyBy2))
// console.log(copyArrayAndManipulate(arr, add2))







// const calcArea = (array) => {
//     const output = []
//     for(let i=0; i<array.length; i++){
//         output.push(array[i] * array[i])
//     }
// }

// const calcPeri = (array) => {
//     const output = []
//     for(let i=0; i<array.length; i++){
//         output.push(array[i] * 4)
//     }
// }
// const sidesArray = [1, 2, 3, 4]
// const operationOnSquare = (arr, instructions) => {
//     let output = []
//     for (let i = 0; i < arr.length; i++) {
//         output.push(instructions(arr[i]))
//     }
//     return output
// }

// const calcArea = input => input * input
// const calcPeri = input => input * 4

// console.log('Area Array', operationOnSquare(sidesArray, calcArea))
// console.log('Perimeter array', operationOnSquare(sidesArray, calcPeri))


// higher order functiosn are functions that take other functiosn as arguments or return functions as their results

// function sayHi() {
//     return function () {
//         console.log('second')
//         return function () {
//             console.log('third')
//         }
//     }
// }

// // calling it using a variable
// // const result = sayHi()
// // result()

// sayHi()()()