// Object literal declaration / using literals
const mysym = Symbol("key1");

const jsuser = {
  name: 'Apoorva',
  "full name": "Apoorva Viresh D",
  email:'apoorva@gmail.com',
  class: '7',
  [mysym]: 'mykey1',  // Symbol used as a unique key
  section: 'A',
  isLoggedIn: 'false'
};

// // Accessing the Symbol directly
// console.log(mysym);             // Output: Symbol(key1)
// console.log(typeof mysym);       // Output: symbol

// // Accessing the value associated with the Symbol key
// console.log(jsuser[mysym]);      // Output: mykey1
// console.log(typeof jsuser[mysym]); // Output: string

// // Another way of accessing values using bracket notation
// console.log(jsuser["name"]);         // Output: Apoorva
// console.log(jsuser["full name"]);    // Output: Apoorva Viresh D
// console.log(jsuser["class"]);        // Output: 7
// console.log(jsuser["section"]);      // Output: A
// console.log(jsuser["isLoggedIn"]);   // Output: false

jsuser.name="Aditya"

jsuser.email="Aditya@gmail.com"

// Object.freeze(jsuser)
// console.log(jsuser)

jsuser.greeting=function()
{
    console.log("hello good morning")
}
console.log(jsuser.greeting());

jsuser.greetingtwo=function()

{
    console.log(`hello ${this.name} , nice to meet you. I recieved your email ${this.email} and your class  ${this.class}`)
}
console.log(jsuser.greeting()); 
console.log(jsuser.greetingtwo()); 