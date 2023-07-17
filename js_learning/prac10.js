let num = [1,2,3]
let num10 = [45,34,67,23]
// num2 = num.map(val => {return val*3})
// console.log(num2)
// num.map((val,index) => console.log(val,index))
// num.map((val,index,num10) => console.log(val,index,num10))

let arr = num10.filter((a)=> {return a<50 && a>20})
console.log(arr)

console.log(num10);
let v = num10.reduce((a,b)=>{return a+b});
console.log(v);


