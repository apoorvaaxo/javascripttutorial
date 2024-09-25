//dates

let mydate=new Date()
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());
// console.log(mydate.toDateString());
// console.log(typeof mydate);

// let mycreateddate=new Date(2023,0,23)
//  let mycreateddate=new Date(2023,0,23,5,3)
let mycreateddate=new Date("05-07-2003")
// console.log(mycreateddate.toLocaleString())


let mytimestamp = Date.now()
// console.log(mycreateddate.getTime())
// console.log(Math.floor(Date.now()/1000));

let newdate=new Date()
console.log(newdate.getFullYear())
console.log(newdate.getDate())
console.log(newdate.getDay())


let anotherime=newdate.toLocaleString('default',{
    weekday: "long",
    dateStyle: "long",
    era: "narrow"
})