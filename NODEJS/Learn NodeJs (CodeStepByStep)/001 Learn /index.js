const app = require("./app");

console.log("Hello world!");
var a = 20;
var b = 30;
var c = 40;
console.warn(a + b + c);
const arr = [3, 1, 2, 7, 4, 5];
console.log(arr[2]);

// import module app

console.warn(app);
console.warn(a + app.x);
