const container = document.querySelector('#container')
const display = document.createElement('div')
const displayText = document.createElement('p')







const add = function(a,b) {
    return a + b;
};

const subtract = function(a,b) {
    return a - b;
};

const multiply = function(a,b) {
    return a * b;
}

const divide = function(a,b) {
    return a / b;
}

let num1;
let num2;
let operand;

const operate = function(a,b,operator) {
    if (operator === '+') {
        return add(a,b)
    } else if (operator === '-') {
        return subtract(a,b)
    } else if (operator === '*') {
        return multiply(a,b)
    } else if (operator === '/') {
        return divide(a,b)
    } else {
        return "ERROR";
    };
};