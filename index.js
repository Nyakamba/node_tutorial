const buffer = new Buffer.from("Vishwas");

buffer.write("Code");

console.log(buffer.toJSON());
console.log(buffer);
console.log(buffer.toString());
