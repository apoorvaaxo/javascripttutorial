const accountId=172003
let accountEmail="apoorvaviresh347@gmail.com"
var accountPassword="12345"
accountCity="Bangalore"
let accountState;

// accountId=2 //not allowed i.e cannot change the value

/*
dont use 'var' because of issue in block scope and functional scope
*/
accountEmail="aditya@gmail.com";
accountPassword="6789";
accountCity="Jaipur";




console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
