// noraml function

// f1();

// function f1(){
//     console.log('normal function definition')
// }


// var f2 = function(){
//     console.log('anonymos function')
// }

// console.log(f2)  // function definition

// f2()

// var f3 = () => {
//     console.log('arrow function')
// }

// f3()
// console.log(f3)

// arrow functions and anonymous functions are not hoisted

// function add(a,b){
//     return a + b
// }

// var f3 = (a,b) => {
//     return a + b
// }


// console.log(4, 5)


// var add = (a, b) => a + b //implicit return; only when the single statement inside the function is return statemnt

// function multiplyBy2 (n){
//     return n * 2
// }
// var multiplyBy2 = n => n * 2 //in case of one parameter, the parenthesis can be remove

// console.log(multiplyBy2(5))

//------------ shadowing

// var x = 10;

// function a() {
//     console.log(x)
// }
// a()

// var x = 10;

// function a() {
//     var x = 40;
//     console.log(x)
// }

// var x = 10

// function a() {
//     var x = 20
//     function b() {
//         var x = 30
//         console.log(x, 'b') //30
//     }
//     b()
//     console.log(x, 'a') //20
// }
// console.log(x, 'global') //10
// a()


              //-----------     Arrays

//var arr = [1,2,3,4]
// var arr = [1,2,3, 'hi','hey'.[4,5,6]]
//console.log(arr)

// console.log(arr[4][1])
// console.log(arr.length)
// console.log(arr[4].length)

              //----------- array methods

//push - adds element to the End of the array ; secondly, it return the new length of the array

// let arr = [1, 2, 3,4]
// console.log(arr)

// let result = arr.push(5,6,7,8)
// arr.push([5,6,7])

//console.log(arr)
//console.log(result) //length of new array


//pop - deletes the last element from the array; secondly, it return the popped element 

// let arr = [1,2,3,4]

// console.log(arr)


// example
// fruits = ['apple', 'banana', 'orange', 'kiwi']

// fruits.pop();                             // 1 st kiwi will remove 
// console.log(fruits)                       // it will print the  fruits ['apple', 'banana', 'orange']
// console.log(fruits.pop())                 // pop the orange ['apple', 'banana']
// console.log(fruits)                       // it will print the  fruits ['apple', 'banana']
// console.log(fruits.push('strawberry'))    // push strawberry at 3 position
// console.log(fruits.push('melon'))         // pop melon at 4 position
// console.log(fruits)                       // ['apple', 'banana', 'strawberry', 'melon']


//shift removed the element at frnt and return the element
// console.log(fruits.shift()) //apple
// console.log(fruits) // 'banana', 'orange', 'kiwi


//unshift returns the new length of the array like push
// let result = fruits.unshift('first')

// console.log(fruits)  //first 'apple', 'banana', 'orange', 'kiwi'
// console.log(result)  //5

// --------- indexof, returns the first index at which a given element occurs

// let fruits = ['apple','banana','orange','kiwi','melon','tomato','grapes']

// let result = fruits.indexOf('banana')
// let result = fruits.indexOf('banana',3)
// console.log(result)



// ----------- Slice

// let fruits = ['apple','banana','orange','kiwi','melon','tomato','grapes']
// let result = fruits.slice(1 ,5) //lending index is NOT is included
// console.log(result)




// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes']

// console.log(fruits.push('strawberry', 'papaya', 'pear')) // ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes','strawberry', 'papaya', 'pear']
// console.log(fruits.pop())                                // 
// console.log(fruits.shift())                              // apple
// console.log(fruits.unshift('jackfruit'))                 // 9   ['jack' ,'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes','strawberry', 'papaya', 'pear']
// let result = fruits.slice(0, 3)                          // 
// console.log(result)












// document.writeln("hello");
// using array literals

// let arr = [1,"Palash",3,42.3,5,{id:1, name:"Patil"},7];

//console.log("arr", arr);

//using constructor function

// let anotherArr = new Array(1,2,3,4,5,6,7);

// console.log("anotherArr", anotherArr);

// console.log(arr[3]);

//push , pop , shift , unshift

// let values = ["a", "e", "i", "o", "u"]

//length of the array
// console.log(values.length);

// values[10]=12;

// console.log(values[6]);

// console.log(values);
// values.push(1);

// console.log(values);
// values.pop();  // remove form end

// console.log(values);
// values.shift();  // remove form start

// console.log(values);
// values.unshift("a");


// function to find out how many numeric values in an array

// function countString (arr){
//     let count;
//     for (let i = 0;i < arr, length; i++){
//         const element = arr[i];
//         if (typeof(element)==="number") count++;
//     }
//     return count;
// }

// const result = countString(["a", "b", "c"]);
// console.log(result);


// function countString (arr){
//     let count = 0;
//     let tempArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (typeof(element)==="string") count++;
//         // if (typeof(element)==="string") tempArr.push(element)
//     }
//     return tempArr;
// }

// const result = countString(["a", "b", "c", 1, 3, 5]);
// console.log(result);

// let arr = [1,2,3,4,5,6,7];

// some and every

// const value1 = arr.some(element => element>2);
// const value2 = arr.every(element => element>2);

// console.log(value1, value2); //true false

