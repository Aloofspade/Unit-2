const re = /(Dr|Mr|Er|Ms|Mrs)\. [A-Z][a-z]*/g

const str = 'Mr. Roll, Ms. Tony, Mrs. Smith, mr.smks, Mirs,skda';

console.log(str.match(re));