const https = require("node:https");
// const crypto = require("node:crypto");

// process.env.UV_THREADPOOL_SIZE = 16;

const MAX_CALLS = 16;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request:${i + 1}`, Date.now() - start);
      });
    })
    .end();

  // crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
  //   console.log(`Hash: ${i + 1}`, Date.now() - start);
  // });
}
