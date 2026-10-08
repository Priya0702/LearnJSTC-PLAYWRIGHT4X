var v = 10;
let l = 10;
const c = 10;

// var vs let vs const

// var:
// - Function-scoped.
// - Can be redeclared and reassigned.
// - Generally avoided in modern JavaScript.

// let:
// - Block-scoped.
// - Cannot be redeclared in the same scope.
// - Can be reassigned.
// - Use let when the value needs to change.

// const:
// - Block-scoped.
// - Cannot be redeclared or reassigned.
// - Use const when the value should not be reassigned.

// Example:

let age = 25;
age = 26; // Allowed because let can be reassigned.

const name = "John";
// name = "Test"; // Error because const cannot be reassigned.

var city = "Mumbai";
city = "Pune"; // Allowed because var can be reassigned.


// var   → Can redeclare + reassign
// let   → Cannot redeclare + can reassign
// const → Cannot redeclare + cannot reassign