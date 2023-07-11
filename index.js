const { error } = require("node:console");
const fs = require("node:fs");

console.log("First");
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);

console.log("Second");

fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log("Third");
