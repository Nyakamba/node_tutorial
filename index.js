const crypto = require("node:crypto");
process.env.UV_THREADPOOL_SIZE = 5;
const MAX_CALLS = 5;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}
