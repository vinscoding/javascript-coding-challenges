'use strict'

//...reverse a string.............
const stringReverse = string => string.split("").reverse().join("");

//.....occurance of given string or character..........
const stringCount = (string, keyString) => {
    const regexp = new RegExp(keyString, 'g');
    return string.match(regexp).length;
};

//.....vowel count.....
const vowelCount = string => string.match(/[aeiou]/gi).length;

//...palindrome check
const palindromeCheck = string => string.split("").reverse().join("") === string;

//...remove the trailing zero from a Number string......
const trimZero = string => String(Number(string));






