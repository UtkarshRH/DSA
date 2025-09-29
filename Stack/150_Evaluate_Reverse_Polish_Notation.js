/*
Question:
You are given an array of strings tokens that represents an arithmetic expression 
in Reverse Polish Notation (RPN).

Evaluate the expression and return an integer that represents the value of the expression.

Notes:
- The valid operators are '+', '-', '*', and '/'.
- Each operand may be an integer or another expression.
- Division between two integers always truncates toward zero.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in RPN.
- The answer and intermediate calculations fit in a 32-bit integer.

Example 1:
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Example 2:
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

Example 3:
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5 = 22
*/

var evalRPN = function(tokens) {
    // Stack to store numbers during evaluation
    let stack = [];

    // Loop through each token
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];

        // If token is an operator, pop last two numbers and apply operation
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            let b = stack.pop(); // second number
            let a = stack.pop(); // first number

            if (token === "+") stack.push(a + b);   // addition
            if (token === "-") stack.push(a - b);   // subtraction
            if (token === "*") stack.push(a * b);   // multiplication
            if (token === "/") stack.push(parseInt(a / b)); // integer division (truncate toward zero)
        } else {
            // If token is a number, convert to integer and push to stack
            stack.push(parseInt(token));
        }
    }

    // Final result will be the only element left in the stack
    return stack[0];
};

// Example test cases
console.log(evalRPN(["2","1","+","3","*"])); // Output: 9
console.log(evalRPN(["4","13","5","/","+"])); // Output: 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // Output: 22

/*
Time Complexity (TC):
- We traverse all tokens once → O(n)
- Each push/pop and arithmetic operation is O(1)
=> Total TC = O(n)

Space Complexity (SC):
- We use a stack to store numbers
- In the worst case (all tokens are numbers), stack size = n
=> Total SC = O(n)
*/
