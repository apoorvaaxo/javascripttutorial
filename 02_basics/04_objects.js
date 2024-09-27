// object declaration using constructor

const tinderuser={}
tinderuser.id='1jt21cs017'
tinderuser.name='apoorva'
tinderuser.age=21
tinderuser.isLoggedIn=false
// console.log(tinderuser)

const reguser={
    email:"apoorva@gmail.com",
    fullname:{
        userfullname:{
            firstname:"apoorva",
            middlename:"Viresh",
            lastname:"D"
        }
    }
}
// console.log(reguser.fullname.userfullname.firstname)

const obj1={1:'a' , 2:'b'}
const obj2={1:'c' , 2:'c'}

// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1 , ...obj2}
// console.log(obj3)

const users=[
    {
        id:1,
        email:'h@gmail.com'
    },
    {
        id:2,
        email:'a@gnail.com'
    },
    {
        id:3,
        email:'b@gnail.com'
    },
    {
        id:4,
        email:'c@gnail.com'
    }
]
users[1].email
console.log(tinderuser)

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isLoggedIn'))