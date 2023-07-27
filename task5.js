// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, op, num2) => {
    switch (op) {
        case '+': return num1 + num2; 
        case '-': return num1 - num2; 
        case '*': return num1 * num2; 
        case '/': return num1 / num2; 
    }
}

console.log(calculator(2 ,'/' ,1));