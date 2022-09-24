/*********** regular expression for phone number ***********/
export function isValidName(name) {
    let regForName = /^[a-zA-Z ]{2,30}$/;
    return regForName.test(name);
}

/*********** regular expression for indian Mobile Number ***********/

export function isValidMobile(mobile) {
    let regExpForMobile = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
    return mobile.match(regExpForMobile)
}

/*********** regular expression for email ***********/
export function isValidEmail(email) {
    let regExpForName = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return email.match(regExpForName)
}

/*********** regular expression for indian pan-card ***********/

export function isValidPanCardNumber(panCardNumber) {
    let regForPanCardNumber = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
    return regForPanCardNumber.test(panCardNumber);
}

/*********** regular expression for indian Aadhar-Card ***********/

export function isValidAadharCardNumber(aadharNumber) {
    let regForAadharNumber = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
    return regForAadharNumber.test(aadharNumber);
}
