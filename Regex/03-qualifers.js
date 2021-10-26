//check if a number is between 0 and 100 

//3 works 
//43 works 
//100 works 
//101 breaks 
//04 break 



const str = ' 3 41 515 54 6 05 042 100 34 101 99 1'

const re = / [0-9] | [1-9][0-9] | 100/g;

// console.log(str.match(re));



const str2 = 'My number is 123456790';
const str3 = "(123)456-7890 is my number";
const str4 = 'call me at 123-456-7890';
const str5 = 'you can reach me at 123 456 7890';

const re2 = /\(?[0-9]{3}[\) -]?[0-9]{3}[- ]?[0-9]{4}/g

console.log(
    str2.match(re2),
    str3.match(re2),
    str4.match(re2),
    str5.match(re2)
    
);

// create a password checker
//1. starts with 3 or more letters cap or lower
//2. 1 optional capital letter that is not R D K N U or P  
//3. ends in at least 1 odd numbers


const str6 = 'spiderMan3, 1123, lkdaldka, 11310kqowqowmq, 12121dd'

const re3 = /[a-zA-Z]{3,}[ABCEFGHIJLMOQSTVWXYZ]?[13579]+/g

console.log(str6.match(re3));