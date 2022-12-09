//remove blanks
// const removeBlanks = (string) => {
//     string = string.replace(/ /g, '')
//     return string;
// }

// console.log(removeBlanks('Hello There General Kenobi'))

//get digits
// const getDigits = (string) => {
//     string = string.replace(/\D/g, '');
//     return string;
// }

// console.log(getDigits('0we3r5t77y6'))

//acronyms 
// const acronyms = (string) => {
//     string = string.split(' ').map(letter => letter[0]).join('').toUpperCase()
//     return string;
// }

// console.log(acronyms('Its getting hot In here'))

//count non spaces
// const nonSpaces = (string) => {
//     string = string.replace(/ /g, '');
//     return string.length;
// }

// console.log(nonSpaces('These are not the droids you are looking for...'))

//remove shorter strings 
// const remShortStr = (string,val) => {
//     string = string.filter(shorter => shorter.length >= val);
//     return string;
// }

// console.log(remShortStr(['There', 'is', 'a', 'bug', 'in', 'the', 'system'],3))