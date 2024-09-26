const marvelheros=["captain america" , "iron man" , "spiderman"]
const dcheros=["superman" , "flash " , "batman"]

// marvelheros.push(dcheros)
// console.log(marvelheros)

// const  newheros=marvelheros.concat(dcheros)
// console.log(newheros)

const allnewheros=[...marvelheros,...dcheros]
// console.log(allnewheros)

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherarray=anotherarray.flat(Infinity)
console.log(anotherarray)
console.log(realanotherarray)