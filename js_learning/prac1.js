console.log("hello world");
{
    var a = 100 
}
let b = "tree"
// b = 140
const c = 23.78
// c = 30   // not possible
console.log(typeof a)
console.log(b)
console.log(c)

// primitive data type

let d = null 
let e = 34  // number
let f = true  // boolean
let g = BigInt("56")    // bigint
console.log(typeof g)
let h = "hello"     //string
let i = Symbol("i am a student")    // symbol
console.log(i)
let j = undefined
console.log(j)

// object non primitive
let dict1 = {"a1":"bike","a2":"car","a3":"bus"}

console.log(dict1["a1"])

dict1["a4"] = 'cycle' // adding new element
dict1.a5 = "train"; // adding new element
console.log(dict1)

let emp_obj = {}
console.log(typeof emp_obj)
