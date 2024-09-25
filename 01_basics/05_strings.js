const name= "apoorva"
const repoCount=50

// console.log(name +" "+  repoCount +" "+ "Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


//declaration of string


const gameName= new String('Apoorva-VD')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));

console.log(gameName.indexOf('o'));

const slicedstring = gameName.slice(3,7)
console.log(slicedstring);


const anotherString = gameName.substring(5,6)
console.log(anotherString)

const newstringone= "    apoorva    "
console.log(newstringone.trim());

const url="https://apoorvaaportfolio.com%20devanal"
console.log(url.replace('%20', '-'))


console.log(url.includes('apoorva')) 