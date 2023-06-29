const  prompt  = require('prompt-sync')();


const x = 10

for(i = 100; i <= x; i++) {
    // console.log(i , 'JS is love');
}

// foreach
const numbers = {
    nanme: "Prince",
    age: 23,
    email: "prince.kaf@gmail.com",
}



for(let key in numbers){
    if(numbers.hasOwnProperty(key)){
        // console.log(key + ': ' + numbers[key]);
    }
}

//how to round numbers in JS
const num = Math.round(27.9);
console.log(num);
