
// ============================================
// JavaScript Identifier Rules - IQ
// ============================================

// 1. Valid Identifiers
// An identifier can start with:
// - A letter
// - An underscore (_)
// - A dollar sign ($)

let validName = "starts with letter";
let _private = "starts with underscore";
let $jquery = "starts with dollar sign";


// 2. Digits in Identifiers
// Digits are allowed, but an identifier cannot start with a digit.

let item1 = "letter then digit";
let _temp2 = "underscore then digit";
let $var123 = "dollar then digits";
let a1_b2 = "letters, digits and underscore";

// Invalid examples:
// let 1stPlace = "invalid";
// let 2ndItem = "invalid";


// 3. Keywords Cannot Be Used as Identifiers
// JavaScript reserved keywords cannot be used as variable names.

// let let = 10;       // Invalid
// let function = 20;  // Invalid
// let return = 30;    // Invalid


// 4. Case Sensitivity
// JavaScript identifiers are case-sensitive.
// myVar, MyVar and MYVAR are different identifiers.

let MyVar = "uppercase M";
let myvar = "lowercase v";
let MYVAR = "uppercase";


// 5. Unicode Identifiers
// JavaScript supports many Unicode characters in identifiers.

let café = "Unicode letter";
let 变量 = "Chinese characters";


// 6. Unicode Escape in Identifiers
// Unicode escape sequences can also be used in identifiers.

let \u0041 = "Unicode escape for A";
let \u005f = "Unicode escape for underscore";


// 7. Special Characters Are Not Allowed
// Characters such as -, space, @, # and ! cannot be used
// inside an identifier.


// let my-name = "invalid";
// let my name = "invalid";
// let my@name = "invalid";
// let my#name = "invalid";
// let my!name = "invalid";


// 8. Built-in Names
// Some names are built-in JavaScript objects/functions.
// They may not be reserved keywords, but using them as variable
// names is generally not recommended.

let Function = "This is allowed, but not recommended";


// ============================================
// Quick Identifier Rules
// ============================================

// Rule 1: Identifier can start with a letter, _ or $.
// Rule 2: Identifier cannot start with a number.
// Rule 3: Digits can be used after the first character.
// Rule 4: Reserved keywords cannot be used as identifiers.
// Rule 5: Identifiers are case-sensitive.
// Rule 6: Spaces and most special characters are not allowed.
```
