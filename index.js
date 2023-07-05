function green(name) {
  console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
  const name = "Vishwas";
  callback(name);
}

higherOrderFunction(green);
