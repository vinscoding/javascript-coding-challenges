//frequency count
"use strict";
//input
const array = ["a", "a", "b", "a", "d"];

const convertedObject = array.reduce((obj, ele) => {
  return { ...obj, [ele]: obj[ele] ? ++obj[ele] : 1 };
}, {});

console.log(convertedObject);//output:{a: 3, b: 1, d: 1}
