const assert = require("assert");
const { add, greet } = require("./app");

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(add(10, 20), 30);
assert.strictEqual(greet("Jenkins"), "Hello, Jenkins!");

console.log("All tests passed.");
