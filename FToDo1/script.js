// setting and swapping
let myNumber = 42;
let myName = 'Branley';

myNumber = 'Branley';
myName = 42;
console.log(myName, myNumber)

//print 52 to 1066 
for (let i = -52; i <= 1066; i++) {
    console.log(i)
}

// dont worry be happy 
const beCheerful = () => {
    console.log('good morning!')
}
for (let i = 0; i <= 98; i++) {
    beCheerful();
}

//multiples of three but not all 
for (let i = -300; i <= 0; i++) {
    if (i  === -3 || i  === -6) {
        continue;
    } else if (i % 3 === 0) {
        console.log(i)
    }
    
}

//printing integers with while 
let i = 1999
while (i < 5280) {
    i++
    console.log(i)
}

//you say its your birthday
