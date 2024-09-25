const score=400
// console.log(score);

const balance=new Number(500.7878)
// console.log(balance);

const newval= (balance.toString());
// console.log(typeof newval)

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));


const othernum=1123.8966
// console.log(othernum.toPrecision(5))

const somenumber=10000
// console.log(somenumber.toLocaleString('en-IN'))


//-------------------------MATH------------------------------


 console.log(Math);
 console.log(Math.abs(-4)); //changes -ve to +ve
 console.log(Math.round(4.6)); //round of to the nearest value
 console.log(Math.ceil(4.2)); //chooses top value
 console.log(Math.floor(4.9)); //chooses the lowest value 
 console.log(Math.sqrt(4.6)); //square root of a number
 console.log(Math.min(4,6,8,3,1)); //min val
 console.log(Math.max(4,6,8,3,1)); //max val

// console.log(Math.random()); //always returns a value between 0 and 1
// console.log((Math.random()*10)+1);  


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min + 1))+min)
