


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
console.log(LoginUserMessage("apoorva"))

