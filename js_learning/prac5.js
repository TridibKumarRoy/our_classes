a = 6
b = 6
if(a > b) {
    console.log(a)
}
else if(b>a) console.log(b)
else console.log("equal")

let day = 1;

switch(day){
    case 1:
        console.log("sun "+ day);
        break;
    case 2:{
        console.log("mon");
        break;
    }
    case 3:
        console.log("tus");
        break;
    case 4:
        console.log("wed");
        break;
    case 5:
        console.log("thu");
        break;
    case 6:
        console.log("fri");
        break;
    case 7:
        console.log("sat");
        break;
}