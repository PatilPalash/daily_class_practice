// String is a primitive data type and use to store textual data

// way of writing string in JS

// let single  = 'single-quote';
// let double = "double-quote"

// let backticks = `backtick-string`

// let amount = 100
// let amount = 'One-Hunderd'

// let billMessage = `Please pay Rs ${amount} here` //template literal
// console.log(billMessage)

// we write new line using backtick-string
// let guestList = `Guests:
// Rahual
// Shubham
// Abishek`

// console.log(guestList);

// we write names in new line using backslash-n(\n)
// let guestList ='Guests:\n *Rahul\n *Shubham\n *Abishek'
// console.log(guestList);

// multiple lines in this code but in the console it shows in a single line.
// better readability in code 

// let str = "Hello\
// I'm continuing in line2-\
// this is line3"
// console.log(str)

// let str1 = "Hello\nworld"
// let str2 = `Hello
// world`
// console.log(str1 === str2) // true

// escape characters 
// let str = 'Hello, how\'re you doing?'
// console.log(str)

// let str = "Hello that \"color\" is red"
// console.log(str)

// let str = "Hello, how're you doing?"
// console.log(str)

// let str = 'that "color" is red'

// let str = `it\`s, it's, "color"`

// let str = "hello"
// console.log(str.length)

// Accessing string characters
// [] or charAt()
// console.log(str.charAt(2))


//Strings are IMMUTABLE IN JS 
// let str = 'abc'
// str = "Apple"

// console.log(str[0])//A

// str[0] ='D'
// console.log(str)

// concatination of strings, [+, concat]

// let name1 = 'vijay Pratap Singh'
// let age = 22 
// let statement = name1 + " is " + age + " years old "
// console.log(statement)

// let newStr = name1.concat(age)
// console.log(newStr)


// -------------- String methods
// ---------------- indexof
// str = 'Widget with id'

// console.log(str.indexOf('with'))//7
// console.log(str.indexOf('id'))//1
// console.log(str.indexOf('id', 2))//12
// console.log(str.indexOf('widget'))//-1 ------- case sensitive - uppercase - lowercase
// console.log(str.indexOf('Widget'))//0

// ----------------- includes()
// let str = "Widget"

// console.log(str.includes("id"))//true
// console.log(str.includes("id", 2))// false


// ----------------- slice()
// let str = "stringify"

// console.log(str.slice(0,5))//strin
// console.log(str.slice(0,1))//s
// console.log(str.slice(2))//ringify
// console.log(str.slice(-4,-1))//gif


// ----------------- substring()
// substring does not work with negative indices
// let str = 'stringify'
// console.log(str.slice(2,6))//ring


// ----------------- split: this method converts your string to an array 
//split works on string
//(str = how-are-you;   // ['how','are','you']
    // str.split('-')
// )
let greeting = 'Hi how are you'
// let resultArr = greeting.split(' ')//['Hi', 'how', 'are', 'you']
// let resultArr = greeting.split('o')// ['Hi h', 'w are y', 'u']

// console.log(resultArr)
// console.log(resultArr.join('-'))

// let example = 'what*are*you*doing'
// let result = example.split('*')
// console.log(example.split('*'))
// console.log(result.join(' '))

// let str = "vijay Pratap singh"
// let resultArr = str.split(' ')
// // console.log(resultArr)
// console.log(resultArr.join('\n'))

// let str = "what*are*you*doing"
// console.log(str.split('*').join('-')) //chainable

// let arr = [1,2,3,4]
// console.log(arr.reverse())

// let greeting = "Hi how are you" // -> you are how Hi
// console.log(greeting.split(' ').reverse().join(' '))

// let str = 'Hello' // -> olleH
// let revStr = ''
// for (let i = str.length - 1; i >= 0; i--){
//     revStr += str[i]
// }
// console.log(revStr)

// replace, replaceAll()
// const temp ='john is a good guy. john is working as a developer'
// console.log(temp.replace('john', 'Rahul'))//replaces only the first accurence
// console.log(temp.replaceAll('john', 'Rahul'))//replaces all accurence

// temp = 'orange'
// console.log(temp.split(' ').join('-'))
// cont arr = [1,2,3,4]
// arr.push(5)
// console.log(arr)
// let str = 'apple'
// str = 'orange'
// console.log(str)


// -------------- trim()
// let str = '              Hi----   there             '
// console.log(str.trim())

// let str = 'hello'
// let str1 = 'HELLO'
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// ----------- object
// let user = {
//     name: 'Darshit',
//     isAdmin: true ,
//     array: [1,2,3,4],
//     obj:{
//         insideObj:'This is inside'
//     }
// }

// console.log(user.name)
// console.log(user.obj.insideObj)
// console.log(user.array[2])

// let str = '12323'  // -> automatically converted to number(coercion), then the comparison is done 
// let num =  12323
// console.log(num == str, 'double') // true
// console.log(num === str, 'triple') // false

// let arr = [1,2,3, 'hi', true] // non-primitive type
