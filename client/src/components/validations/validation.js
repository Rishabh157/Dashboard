/*********** regular expression for email ***********/

function isValidEmail(email) {
    let regExpForName = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return email.match(regExpForName)
}

/*********** regular expression for phone number ***********/

// function isValidPhone(phoneNum) {
//     let regExpForPhone = "^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$";
//     return phoneNum.match(regExpForPhone)
// }

// if (isValidPhone(9009648224)) {
//     console.log("Validate done")
// } else {
//     console.log("not validate")
// }