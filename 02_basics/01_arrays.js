//array
const myarray=[0,1,2,3,4,5]
const myhero=["chota bheem" , "spiderman" , "iron man" , "captain america"]

const myarraytwo=new Array(1,2,3,4,5)
// console.log(myarray[1]) 
// console.log(myarraytwo[1])
// console.log(myhero[2])

//array methods

// myarray.push(6)
// myarray.push(7)
// myarray.pop()

// myarray.unshift(-1,0,9,7,9) //inserts a value at the start of the array
// myarray.shift() //removes the first element from the array
// console.log(myarray.includes(5))
// console.log(myarray.includes(-1))
// console.log(myarray.indexOf(4))

// const newarr=myarray.join()
// console.log(myarray)
// console.log(typeof newarr)

//-----------------------------------------------------
//slice , splice

console.log("A" , myarray)
const mynewarray1=myarray.slice(1,5)
console.log(mynewarray1)

console.log("B ",myarray)
const mynewarray2=myarray.splice(1,3)

console.log("C ",myarray)
console.log(mynewarray2)