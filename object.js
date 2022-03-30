// let user = {
//     'name': 'Rahul',
//     age: 25,
//     isAdmin: false
// }
//  console.log(user.name)
// console.log(user['name'])

// let user = {} //object literal syntax
// user.name = 'Agni'
// user['name'] = 'Agni'
// console.log(user)

// let user = new Object()  // object constructor syntax
// user.name = 'Rahul'
// console.log(user)

// delete user.name
// console.log(user)

// let user = {
//     'name': 'Rahul',
//     age: 25,
//     isAdmin: false,
//     'like brids': true
// }
// console.log(user['like brids'])



// let fruit = 'apple'
// let obj = {
//     [fruit]: true
// }
// console.log(obj)

// let fruit = 'apple'
// let obj = {
//     [fruit + 'Computers']: true // computed property
// }
// console.log(obj) //applecomputers:true

// let user = {
//     name: 'Rahul',
//     age: 25,
// }
//  console.log("age" in user) // it gives boolean value


// looping in Object
// for in loop

// let user = {
//     name: 'Rahul',
//     age: 25,
//     isAdmin: true
// }

// for(let key in user){
//     //print keys
//     // console.log(key)
//     console.log(key, user[key])

// }

//exapmle
// let salaries = {
//     john: 100,
//     Ann: 160,
//     Peter: 130
// }

// let sum = 0;
// for(let item in salaries){
//     sum += salaries[item]
// }
// console.log(sum)


// Multiply only the numeric value with 2
// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu'
// }

// for(let key in menu){
//     if(typeof menu[key] === 'number'){
//         menu[key] = menu[key] * 2
//     }
// }
// console.log(menu)

// ---------- Object referencing and copying
// let message = "hello"
// phrase = message + "world"
// console.log(message)
// console.log(phrase)

// let user = {
//     name: 'rahul'
// }

// admin = user

// console.log(user)
// console.log(admin)

// admin.name = 'pooja'

// console.log(user, 'user')
// console.log(admin,'admin')

// let user = {name: 'Rahul'}
// let admin = {name: 'Aarti'}

// admin.name = 'Shrutis'
// console.log(admin === user)
// console.log(user)
// console.log(admin)

// let user = {
//     name: 'Rhaul',
//     age: 23,
//     isHappy: true
// }

// let duplicate = {}

// for(let key in user){
//     duplicate[key] = user[key]
// }
// duplicate.isHappy = false

// console.log(user)
// console.log(duplicate)

// let user = {
//         name: 'Rhaul',
//         age: 23,
//         isHappy: true
//     }
    
//     let duplicate = {}
    
//     // for(let key in user){
//     //     duplicate[key] = user[key]
//     // }
//     Object.assign(duplicate, user)
//     let clone = Object.assign({}, user)
//     // duplicate.isHappy = false // to show that duplicate is independent
//     clone.isHappy = false
//     console.log(clone)
//     console.log(user)
//     console.log(duplicate)
    


// spread operator ....

// let user = {
//     name: 'Rahul',
//     age: 23
// }

// let clone = {...user, lastName: 'Sharma'}

// clone.lastName = 'Sharma'

// console.log(user)
// console.log(clone)

// let arr1 = [0, 1, 2]
// let arr2 = [3, 4, 5]

// // make arr3 which combines all values from arr1 and arr2
// let arr3 = [ ...arr1, ...arr2]
// console.log(arr3)

// let obj1 = {name: 'Rahul', x: 42}
// let obj2 = {name: 'Shyam', y: 13}

// let obj3 = {...obj1, ...obj2}
// console.log(obj3)



// let user = {
//     age: 30,
//     name: 'Rahul',
//     sayHi: function(){
//         console.log('hi!')
//     }
// }

// function sayHi(){
//     console.log("hi from normal function")
// }
// a function bound to an object is called a method

// sayHi()

// console.log(user.sayHi)

// user.sayHi

// let user = {
//     age: 30,
//     firstName: 'Rahul',
//     sayHi: function(){
//         console.log('hi!', user.firstName)
//     }
// }
// user.sayHi()

// let admin = user
// user = null
// admin.sayHi()


// let user = {
//     firstName: 'rahul',
//     score: 0,
//     incrementscore() {
//         this.score++
//     }
// }

// console.log(user.score)

// user.incrementscore()
// user.incrementscore()
// user.incrementscore()



// function sayHi(){
//     console.log(this.firstName)
// }
// let user = {
//     firstName: 'rahul',
// }
// let admin = {
//     firstName: 'shruti',
// }
// user.func = sayHi
// admin.func = sayHi

// user.func()
// admin.func()

// let user2 = {
//     firstName: 'Bhanu',
//     sayHi: () => {
//         console.log(this.firstName) //"this" inside an arrow function refers to the WINDIW object
//     }
// }

//value of "this" is defined during runtime and it refers to the object from where it was called.



//question

// let ladder = {
//     step: 0,
//     up(){
//         this.step++
//     },
//     down(){
//         this.step--
//     },
//     showStep(){
//         console.log(this.step)
//     }
// }

// ladder.up()
// ladder.up()
// ladder.down()
// ladder.down()
// ladder.down()
// ladder.showStep() // -1
// ladder.up()
// ladder.up()
// ladder.up()
// ladder.showStep() // 2


// const obj = {
//     message: 'Hello, Earth',
//     getMessage(){
//         const message = 'hello, Earth'
//         return this.message

//     }
// }

// let result = obj.getMessage()
// console.log(result)  //


let obj = {
    who: 'World',
    greet: function (){
        console.log('Hello, ${this.who}')
    },
    farewell: () => {
        console.log('Goodbye, ${this.who}')
    }
}

obj.greet()
obj.farewell()