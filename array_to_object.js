"use strict";
//input
const array = ["a", "a", "b", "a", "d"];

const convertedObject = array.reduce((obj, ele,index) => {
  return { ...obj, [index]: ele };
}, {});

console.log(convertedObject);//output:{0: "a", 1: "a", 2: "b", 3: "a", 4: "d"}
