const a = { a: 1, b: 2, c: {} };
const b = { a: 1, b: 2, c: {} };
const c = a;

// Shallow
console.log(a === b); // false
console.log(a.c === b.c); // false
console.log(a === c); // true

// Deep
console.log(Object.is(a, b), a == b); // true true
console.log(Object.is(a, c)); // true
console.log(a.a == a.a); //true
