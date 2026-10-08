# JavaScript Keywords and Identifiers

## Keywords

Keywords are **reserved words in JavaScript** that have a predefined meaning and purpose.

JavaScript already understands these words, so we cannot use them as names for variables, functions, or classes.

### Examples of Keywords

* `let`
* `const`
* `var`
* `if`
* `else`
* `function`
* `return`
* `class`

### Rules for Keywords

1. Keywords have a predefined meaning in JavaScript.
2. Keywords cannot be used as identifiers.
3. Keywords are generally written in lowercase.
4. Keywords cannot be used as variable, function, or class names.
5. JavaScript keywords are case-sensitive.
6. Keywords must be used according to their defined purpose.

---

## Identifiers

Identifiers are **names given by the developer** to variables, functions, classes, and other program elements.

In simple words:

> **Identifier = A name given to something in our JavaScript program.**

For example:

```javascript
let age = 25;
```

Here:

* `let` → **Keyword**
* `age` → **Identifier**
* `25` → **Value**

### Important Point

A **variable name is an identifier**, but an identifier is not limited to variable names.

For example:

```javascript
function calculate() {
    return 10;
}
```

Here:

* `function` → Keyword
* `calculate` → Identifier
* `return` → Keyword

`calculate` is an identifier because it is the name given to the function.

### Rules for Identifiers

1. An identifier can contain letters, digits, `_`, and `$`.
2. An identifier cannot start with a digit.
3. An identifier cannot contain spaces.
4. An identifier cannot be a JavaScript reserved keyword.
5. Identifiers are case-sensitive.
6. Identifiers should have meaningful names.

### Examples

```javascript
let age = 25;
const userName = "John";
let totalAmount = 500;
```

Here:

* `age` → Identifier
* `userName` → Identifier
* `totalAmount` → Identifier

### Keyword vs Identifier

| Keyword                       | Identifier                                           |
| ----------------------------- | ---------------------------------------------------- |
| Reserved by JavaScript        | Name given by the developer                          |
| Has a predefined meaning      | Used to name program elements                        |
| Example: `let`, `const`, `if` | Example: `age`, `userName`, `calculate`              |
| Cannot be used as a name      | Can be used as a name if it follows the naming rules |

### Easy Way to Remember

**Keyword → JavaScript's reserved word**

**Identifier → Developer's chosen name**

Example:

```javascript
const userName = "John";
```

`const` → **Keyword**
`userName` → **Identifier**
`"John"` → **Value**
