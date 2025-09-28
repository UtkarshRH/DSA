/*
==============================
Question: Valid Parentheses
==============================

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

A string is valid if:
1. Open brackets are closed by the same type of brackets.
2. Open brackets are closed in the correct order.
3. Every closing bracket has a corresponding opening bracket.
*/

/*
==============================
Approach using Stack
==============================

1. Initialize an empty stack.
2. Create a map to match closing brackets with opening brackets:
   { ")": "(", "]": "[", "}": "{" }
3. Loop through the string character by character:
   - If it’s an opening bracket, push it onto the stack.
   - If it’s a closing bracket, check:
       - If stack is empty -> return false
       - If top of stack doesn’t match -> return false
       - Else -> pop the top element
4. After the loop, if the stack is empty -> return true, else -> false
*/

/*
==============================
Code
==============================
*/
var isValid = function(s) {
    let stack = [];
    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === ")" || char === "]" || char === "}") {
            // Check if stack is empty or top doesn't match
            if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
                return false;
            }
            stack.pop(); // remove the matching opening bracket
        } else {
            // Opening bracket, push to stack
            stack.push(char);
        }
    }

    // Stack should be empty if all brackets matched
    return stack.length === 0;
};

/*
==============================
Example / Test Cases
==============================
*/
console.log(isValid("()"));      // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false
console.log(isValid("([)]"));    // false
console.log(isValid("{[]}"));    // true

/*
==============================
Explanation (Stack changes)
==============================

Input: "([{}])"

Step by step stack changes:

| Char | Stack       | Action                        |
|------|------------|--------------------------------|
| (    | [ ( ]       | Push opening bracket           |
| [    | [ (, [ ]    | Push opening bracket           |
| {    | [ (, [, { ] | Push opening bracket           |
| }    | [ (, [ ]    | Pop { (matches)               |
| ]    | [ ( ]       | Pop [ (matches)               |
| )    | [ ]         | Pop ( (matches)               |

- Stack is empty -> string is valid ✅
*/

/*
==============================
Complexity Analysis
==============================

Time Complexity: O(n) -> traverse the string once.
Space Complexity: O(n) -> stack can store up to n characters.
*/
