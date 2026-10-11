// JavaScript Number Literals
// 1. What are Number Literals?

// Number literals are numeric values written directly in JavaScript code.

// JavaScript supports different ways of representing numbers, including:

// Decimal
// Binary
// Octal
// Hexadecimal

// Each number system uses a different base and has its own rules for valid digits.

// 2. Decimal Number System (Base 10)

// The decimal number system is the standard number system we use in everyday life.

// Base: 10
// Allowed digits: 0–9
// Prefix: No special prefix is required.
// let count = 42;       // Positive integer literal
// let negative = -100;  // Negative number literal
// let zero = 0;         // Zero is also a numeric literal
// let price = 99.99;    // Decimal floating-point literal


// Explanation: Decimal numbers use ten digits, from 0 to 9.

// 3. Binary Number System (Base 2)

// The binary number system uses only two digits: 0 and 1.

// Base: 2
// Allowed digits: 0 and 1
// Prefix: 0b or 0B
// let a = 0b0;       // Valid binary literal (decimal value: 0)
// let b = 0b1;       // Valid binary literal (decimal value: 1)
// let c = 0b1010;    // Valid binary literal (decimal value: 10)
// let d = 0b1111;    // Valid binary literal (decimal value: 15)

// // let invalid = 0b102; // Invalid: digit 2 is not allowed


// Explanation: Binary numbers can contain only 0 and 1. The prefix 0b identifies a binary literal.

// Example conversion:

// 0b1010 = 1 × 8 + 0 × 4 + 1 × 2 + 0 × 1 = 10 in decimal.

// 4. Octal Number System (Base 8)

// The octal number system uses eight digits.

// Base: 8
// Allowed digits: 0–7
// Prefix: 0o or 0O
// let a = 0o7;       // Valid octal literal (decimal value: 7)
// let b = 0o10;      // Valid octal literal (decimal value: 8)
// let c = 0o17;      // Valid octal literal (decimal value: 15)
// let d = 0o77;      // Valid octal literal (decimal value: 63)

// // let invalid = 0o89; // Invalid: digits 8 and 9 are not allowed


// Explanation: Octal numbers can contain only digits from 0 to 7. The prefix 0o identifies an octal literal.

// Example conversion:

// 0o10 = 1 × 8 + 0 × 1 = 8 in decimal.

// 5. Hexadecimal Number System (Base 16)

// The hexadecimal number system uses sixteen symbols to represent values.

// Base: 16
// Allowed symbols: 0–9 and A–F
// Prefix: 0x or 0X

// The letters represent the following values:

// Hexadecimal symbol	Decimal value
// A	10
// B	11
// C	12
// D	13
// E	14
// F	15
// let a = 0x9;       // Valid hexadecimal literal (decimal value: 9)
// let b = 0xA;       // Valid hexadecimal literal (decimal value: 10)
// let c = 0xF;       // Valid hexadecimal literal (decimal value: 15)
// let d = 0x10;      // Valid hexadecimal literal (decimal value: 16)
// let e = 0xFF;      // Valid hexadecimal literal (decimal value: 255)
// let f = 0xFF0000;  // Valid hexadecimal literal (decimal value: 16711680)

// // let invalid = 0xG; // Invalid: G is not a hexadecimal digit


// Explanation: Hexadecimal numbers can contain digits from 0 to 9 and letters from A to F. Both uppercase and lowercase letters are allowed.

// Example conversion:

// 0xFF = 15 × 16 + 15 × 1 = 255 in decimal.

// Important: Hexadecimal literals are numbers in JavaScript. A value such as 0xFF0000 can represent red when used as an RGB color code, but the literal itself is a number.

// // 6. Comparison of Number Systems
// Number system	Base	Prefix	Allowed digits
// Decimal	10	None	0–9
// Binary	2	0b	0–1
// Octal	8	0o	0–7
// Hexadecimal	16	0x	0–9, A–F
// 7. How to Identify Number Literals

// Check the prefix at the beginning of the number:

// 0b → Binary
// 0o → Octal
// 0x → Hexadecimal
// No special prefix → Usually decimal

// Remember: A correct prefix alone does not guarantee that a literal is valid. Its digits must also follow the rules of that number system.

// For example:

// let a = 0b101;  // Valid binary literal
// let b = 0o765;  // Valid octal literal
// let c = 0xFF;   // Valid hexadecimal literal
// let d = 123;    // Valid decimal literal

// // let x = 0b102; // Invalid binary literal
// // let y = 0o89;  // Invalid octal literal
// // let z = 0xG;   // Invalid hexadecimal literal

// 8. Important Notes for Automation Testers
// JavaScript treats binary, octal, hexadecimal and decimal literals as numbers.
// The typeof operator returns "number" for these values.
// These number systems are useful to recognize, although binary, octal and hexadecimal literals are less common in everyday Playwright test scripts.
// Variables, strings, arrays, objects, conditions, functions and async/await are generally more important for daily automation tasks.
// let binary = 0b1010;
// let octal = 0o12;
// let hexadecimal = 0xA;
// let decimal = 10;

// console.log(binary);       // 10
// console.log(octal);        // 10
// console.log(hexadecimal);  // 10
// console.log(decimal);      // 10

// console.log(typeof binary);      // "number"
// console.log(typeof octal);       // "number"
// console.log(typeof hexadecimal); // "number"
// console.log(typeof decimal);     // "number"


// Key takeaway: Different number systems can represent the same numeric value. JavaScript interprets all four examples above as the number 10.