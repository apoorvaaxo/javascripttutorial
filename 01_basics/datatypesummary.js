/* 
=>primitive data types (7 categories)
1. string
2. number
    const score=99
3. bigint
const bigNumber=2345678765432n 
4. null
    const outsideTemp=null

5. undefined
    let useEmail;
6. boolean
 const isLoggedIn=false

7. symbol
const id=Symbol('123')
const anotherId=Symbol=('123')

=>non primitive data type or reference( 3 categories)
1. object
let myobj ={
name:"apoorva",
age:"21",
}

2. array
const hero=["shaktiman" , "chota bheem" , "doga"]

3.  functions

const function(){
console.log("hello");
}

=>Is javascript dynamically typed or statically typed?
it is dynamically typed  because it allows you to initialise a variable
to a data type and then reassign it to a different data type


*/


// ----------------------------MEMORIES--------------
/*
Stack(Primitive) and Heap(Non primitive) Memories
using stack memory , it creates a copy  of a variable
using heap memory , it creates references

*/

let mycollege="jyothy institute of technology"

let anothername=mycollege
anothername="7semester"

// console.log(mycollege);
// console.log(anothername);

let userOne={
    email:"apoorva@gmail.com",
    upi:"hello@ybl"
}
console.log(userOne);

let userTwo = userOne;
console.log(userTwo);


userTwo.email="aditya@gmail.com"

console.log((userOne.email));
console.log(userTwo.email);



