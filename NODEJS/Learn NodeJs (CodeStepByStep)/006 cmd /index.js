const fs = require("fs");

// console.log("hello world!");
// console.log(process);

// Creating a file with fs

// console.log(typeof process.argv[0]);
// console.log(process.argv[3]);

// const input = process.argv;

// fs.writeFileSync(input[2], input[3]);

//* ======= Creating a file with argv in cli =====

// const input = process.argv;

// if (input[2] == "a" || input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "r" || input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("Invalid input");
// }

//? == Create a file in folder , Get name,path and data of file
const path = require("path");

// const dirPath = path.join(__dirname, "files"); // give current dir path

// console.log(dirPath);

// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(
//     dirPath + `/hello${i}.txt`,
//     "hey, file is created using fs module"
//   );
// }

// fs.readdir(dirPath, (err, files) => {
//   console.warn(files);
//   files.forEach((fileName) => {
//     console.warn("file name is => ", fileName);
//   });
// });

//? CRUD with file system
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/data.txt`;
console.log(dirPath);

// create and write in file

// fs.writeFileSync(filePath, "this is a simple text file");

// read a file

// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// }); // read data from file

// add text to file

// fs.appendFile(filePath, "  and file name is apple.txt", (err) => {
//   if (!err) {
//     console.log("file updated");
//   }
// });

// rename a file

// fs.rename(filePath, dirPath + "/newData.txt", (err) => {
//   if (!err) {
//     console.log("file rename succesfully");
//   }
// });

// delete a file

// fs.unlinkSync(dirPath + "/newData.txt");
