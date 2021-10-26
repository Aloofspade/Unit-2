//All Capitals 

const re1 = /[A-Z]/g

//find any vowel 

const re2 = /[aeiouAEIOU]/

//find any even number 

const re3 = /[24680]/

//find any file ending in js 


const re4 = /\.js/

//find any name that : 
//1. starts with Mr. or Ms.
//2. then has a space after
//3. then has a least 4 letter name strating with a capital 

const str5 = "mr. dome, Mr. Doug, Ms Smith, Ms.Tony, Ms. Jane, Mr. Lauranne";

const re5 = /M[rs]\. [A-Z][a-z][a-z]/g;

console.log(str5.match(re5));

const re = /[A-Z][a-z]/;

