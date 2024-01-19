// function

function sqr(num,pow){
    let pw_val = num**pow
    return pw_val
}
function sum(a,b,c=8){
    let pw_val = a + b + c
    return pw_val
}

let sqr2 = (num,pow)=>{
    return num**pow
}

console.log(sqr(2,5))