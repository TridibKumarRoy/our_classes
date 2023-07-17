let arr = [1,2,3,4,5]

console.log(arr)
console.log(arr[2])
arr[2] = "array"
console.log(arr)
console.log(arr.length)
arr.forEach(element => console.log(element));
for (key in arr) {
    console.log(arr[key])
}
for (el of arr) {
    console.log(el)
}
let s1 = arr.toString().replaceAll(",","")
console.log(s1)

console.log(arr.pop())
console.log(arr)
arr.push(50)
console.log(arr)
console.log(arr.shift())
console.log(arr)
console.log(arr.unshift(100))
console.log(arr)
delete arr[1]
console.log(arr)
console.log(typeof arr[1])

let arr2 =[4,3,5,6,1,8]
arr2.sort()
console.log(arr2)
console.log(arr2.sort().reverse())
let sf = (a,b) =>{
    return a-b
}
console.log(arr2.sort(sf))
console.log(arr2)

arr2.splice(1,3,30,40)
console.log(arr2)
console.log(arr2.slice(1,3))
console.log(arr2.slice(1))
console.log(arr2.slice(1,3))

arr2.forEach(function(e){console.log(e)})
