"use strict";
const repeatString = (str, num) => {
    let repeatStr = '';
    for (let i = 1; i <= num; i++) {
        repeatStr = repeatStr + str;
    }
    console.log(repeatStr);
};
console.log(repeatString("hello", 3));
