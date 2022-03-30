
// function sayHi(){
//     console.log(this)
// }

// let sayHiArrow = () => {
//     console.log(this)
// }

// let user = {
//     name: 'Rahul',
//     sayHiobject(){
//         console.log(this)
//     }
// }

// sayHi() // global window object
// sayHiArrow()// window 
// user.sayHiobject()// user object

// defination of "this" keyword
// this refers to the object from where the function is called
// value of "this" is determined at run-time.


// call, apply, and bind methods

// let user = {
//     name:'Rahul',
//     sayHi(){
//         console.log(this.name)
//     }
// }

// let admin = {
//     name: 'Prateek'
// }
// user.sayHi()




// bind returns me a function with the new value of this

// let newHello = hello.bind(admin)
// newHello(1,2)

//hello.bind(admin)()
//hello.call(admin)
//heloo.apply(admin)

// var message = 'Hello Earth'
// const obj = {
//     message: 'Hello, World'
// }
// function print(){
//     console.log(this.message)
// }

// print()
// print.call(obj)
// print.apply(obj)
// print.bind(obj)()

// --------------- Map and set

// map is a cellection of just like a object the main different between is that a map allows keys any time 

// let myMap = new Map()

// myMap.set(1, 'num')//a numeric key
// myMap.set('1', 'str1')//a string key
// myMap.set(true, 'bool1')//a boolean key

// console.log(myMap)

// console.log(myMap.get(1))
// console.log(myMap.get('1'))
// console.log(myMap.size)

// myMap.delete('1')

// myMap.clear()

// myMap.set('1', 'str1').set(1, 'num')


// let fruitMap = new Map([
//     ['banana', 40],
//     ['kiwi', 150],
//     ['apple', 60]
// ])

// for(let item of fruitMap){
//     console.log(item)
//     console.log('key is', item[0], '&', 'value is', item[1])
// }

// console.log(fruitMap.values())
// console.log(fruitMap.keys())

// let valueArray = Array.from(fruitMap.values())
// let keyArray = Array.from(fruitMap.keys())

// console.log(valueArray)
// console.log(keyArray)
// for(let item of fruitMap.keys()){
//     console.log(keyArray)
// }
// for(let item of fruitMap.values()){
//     console.log(item)
// }

// fruitMap.forEach((value, key)) => {
//     console
// }