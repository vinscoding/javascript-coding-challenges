'use strict'

//......check whether a input is array, return true or false........
//logic: as pop method exist only on Array, so it returns a truthy Value and !(not) operator converts it to Boolean
const isArray = input => !!input.pop;


//.......clone an array.............
//logic: slice method dont mutate the array,"If start is undefined, slice starts from the index 0."
const arrayClone = array => array.slice();

//........min and max number in an array, return array with min and max...........
const minMaxArray = array => [Math.min(...array), Math.max(...array)];

//.....sort an array..........
//ascending
const arraySortAssending = array => array.sort((ele1, ele2) => ele1 - ele2);
//subtract ele1 from ele2 for descending

//...filter string in an array.......
const filterString = array => array.filter(ele => typeof ele !== "string");

//....sum of array elements..........
const sumArray = array => array.reduce((acc, ele) => acc + ele, 0);

//....rotate array right by one.......
const arrayRotateRight = array => {
    array.unshift(array.pop())
    return array;
};

//....rotate array left by one.......
const arrayRotateLeft = array => {
    array.push(array.shift())
    return array;
};

//...sort array by string length
const sortByStringLength = array => array.sort((ele1, ele2) => ele1.length - ele2.length);
// input:["apple", "pie", "shortcake"]
// output:["pie", "apple", "shortcake"]





