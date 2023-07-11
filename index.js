const fs = require("node:fs");

const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);
