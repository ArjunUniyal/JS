const accountID=34 //const means that we cannot chnage this variables value

let accountEmail="arjununiyal.cs18@gmail.com" 
var accountPassword="12345"
/*
prefer not to use var because of issue in block and functional scope
*/
accountCity="Dehradun"
let accountState //when we print this it will show that this variable is undefined
//accountID=7 //this statement throws error because it is a constant variable
accountEmail="arjununiyal.cs18@gmail.com"
accountPassword="54321"
accountCity="Haridwar"
console.log([accountEmail,accountID,accountPassword,accountCity,accountState])
