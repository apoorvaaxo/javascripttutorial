


// you can write like this using functions called function definition
function myname(){
    console.log("A")
    console.log("P")
    console.log("O")
    console.log("O")
    console.log("R")
    console.log("V")
    console.log("A")
}

//myname()

//num1 , num2 are parameters
// function add(num1 , num2)    {
//     sum=num1+num2;
//     console.log(sum)
// }

function add(num1 , num2)    {
    let sum=num1+num2;
    return sum
}
const res= add(2,5)
// console.log("result value is" , res)



function LoginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username")
        return
    }
   
    return `${username } just logged in`
    

}
//console.log(LoginUserMessage("apoorva"))
// console.log(LoginUserMessage("apoorva"))

// "..." is called rest or spread operator
function calculatecartprice(...num1){
return num1
}
// console.log(calculatecartprice(200,300,400,6000))

const user={
    username:"apoorva",
    prices:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)


const mynewarray=[200,400,600,290]
function AcceptNumber(getArray){
    return getArray[2]
}
// console.log(AcceptNumber(mynewarray))



const fruits=['apple', 'mango','grapes']
function returnfruits(getArray){
    return getArray[1]
}
console.log(returnfruits(fruits))