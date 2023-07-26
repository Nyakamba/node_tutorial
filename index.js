const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "Brucee",
        lastName: "Waynee",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gzip = zlib.createGzip();

// const readableStream = fs.createReadStream("./file.txt", {
//   encoding: "utf-8",
//   highWaterMark: 2,
// });

// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

// const writeableStream = fs.createWriteStream("./file2.txt");

// readableStream.pipe(writeableStream);

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });

// const fs = require("node:fs/promises");

// async function readFile() {
//   try {
//     const data = await fs.readFile("file.txt", "utf-8");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// readFile();

// console.log("First");

// fs.readFile("file.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// console.log("Second");

// const { error } = require("node:console");
// const fs = require("node:fs");

// console.log("First");
// const fileContents = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents);

// console.log("Second");

// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// console.log("Third");

// fs.writeFileSync("./greet.txt", "Hello world");

// fs.writeFile("./greet.txt", " Hello Vishwas", { flag: "a" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File written");
//   }
// });
