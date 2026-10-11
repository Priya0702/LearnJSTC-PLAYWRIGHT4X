// Binary Number System (Base 2)
// 1. What is Binary?

// The binary number system is a number system that uses only two digits:

// 0
// 1

// It is called Base 2 because it uses two digits.

// In JavaScript, we can write a binary number literal using the prefix 0b or 0B.

// let binary = 0b1010;

// console.log(binary); // Output: 10


// Here:

// 0b tells JavaScript that the number is written in binary.
// 1010 is the actual binary number.
// JavaScript converts the binary value to its decimal equivalent when displaying it.

// Important: 0b is a prefix, not part of the binary digits themselves.

// 2. Why Do Binary Positions Have Values Like 1, 2, 4, and 8?

// Before converting a binary number to decimal, we need to understand its position values.

// In the decimal number system, each position is based on powers of 10.

// For example, in the number 345:

// 5 is in the ones position: 
// 5 ×1
// 4 is in the tens position: 
// 4×10
// 3 is in the hundreds position: 
// 3× 100

// So:

// 345 = 3 × 100 + 4 × 10 + 5 × 1

// Binary works in the same way, but instead of powers of 10, it uses powers of 2.

// The rule: Each position is worth twice as much as the position immediately to its right.


// Notice the pattern:

// 1 → 2 → 4 → 8 → 16 → 32 → 64

// Every time we move one position to the left, we multiply the previous position value by 2.

// We do this because binary is Base 2.

// Remember: Position values are always calculated from right to left, even though we normally read a number from left to right.

// 3. Understanding the Binary Number 0b1010

// Let's convert this binary number into decimal:

// let binary = 0b1010;


// First, remove the prefix 0b mentally. The binary digits are:

// 1010

// Now assign a position value to each digit, starting from the right.

// Binary digit	Position value	Calculation	Result
// 1	8	1 × 8	8
// 0	4	0 × 4	0
// 1	2	1 × 2	2
// 0	1	0 × 1	0

// Why do we multiply each digit by its position value?

// If the digit is 1, we include that position's value.
// If the digit is 0, that position contributes zero.

// Now add all the results:

// 8 + 0 + 2 + 0 = 10

// Therefore:

// 0b1010 = 10 in decimal.

// 4. Why Is the Value 4 Not Added in 0b1010?

// This is an important point for beginners.

// In 1010, the position values are:

// Binary digits:      1    0    1    0
// Position values:    8    4    2    1


// The digit above the position value 4 is 0.

// Therefore:

// 0 × 4 = 0

// We do not add 4 because the binary digit in that position is zero.

// The complete calculation is:

// 1 × 8 + 0 × 4 + 1 × 2 + 0 × 1

// = 8 + 0 + 2 + 0

// = 10

// Key rule: A binary digit of 1 includes its position value. A binary digit of 0 contributes nothing to the total.

// 5. Another Example: Convert 0b1111 to Decimal

// The binary number is:

// 1111

// Its position values are 8, 4, 2, 1.

// Binary digit	Position value	Result
// 1	8	8
// 1	4	4
// 1	2	2
// 1	1	1

// All four digits are 1, so all four position values are included.

// 8 + 4 + 2 + 1 = 15

// Therefore:

// 0b1111 = 15 in decimal.

// 6. One More Example: Convert 0b1101 to Decimal

// The binary number is:

// 1101

// Assign the position values from right to left:

// Binary digits:      1    1    0    1
// Position values:    8    4    2    1


// Now calculate:

// 1 × 8 = 8
// 1 × 4 = 4
// 0 × 2 = 0
// 1 × 1 = 1

// Add the results:

// 8 + 4 + 0 + 1 = 13

// Therefore:

// 0b1101 = 13 in decimal.

// 7. How to Convert Any Binary Number to Decimal

// Follow these steps:

// Identify the binary number and ignore its 0b prefix.
// Start from the rightmost digit and assign the position value 1.
// Move one position to the left and double the previous value: 1, 2, 4, 8, 16, 32...
// Multiply each binary digit by its position value.
// Add all the results to get the decimal value.
// 8. Quick Revision
// Binary uses only 0 and 1.
// The prefix 0b identifies a binary literal in JavaScript.
// Binary is Base 2.
// Position values are calculated from right to left.
// Each position to the left is twice the value of the position to its right.
// A digit of 1 includes its position value; a digit of 0 contributes zero.
// JavaScript treats binary literals as numbers.
let a = 0b1010;
let b = 0b1111;
let c = 0b1101;

console.log(a); // 10
console.log(b); // 15
console.log(c); // 13

console.log(typeof a); // "number"


//Final takeaway: First calculate the position values using powers of 2. Then use the binary digits to decide which values to include in the sum.