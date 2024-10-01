const container = document.querySelector('#container');
const display = document.querySelector('#display');

const add = function(a,b) {
    return a + b;
};

const subtract = function(a,b) {
    return a - b;
};

const multiply = function(a,b) {
    return a * b;
};

const divide = function(a,b) {
    return a / b;
};

const remainder = function(a,b) {
    return a % b;
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
    } else if (operator === '%') {
        return remainder(a,b)
    } else {
        return "ERROR";
    };
};

let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.onclick = () => {
        if (button.textContent == 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) {
            numberPress()
        } else if (button.textContent == "%" || "/" || "*" || "-" || "+") {
            operandPress()
        }
    };
});

const numberPress = function() {
    if (operandLast = false) {
        if (display.textContent === 0) {
            button.textContent = display.textContent;
        } else {
            button.textContent = display.textContent + button.textContent
        }
    } else {

    }
};

const operandPress = function() {
    operand = button.textContent
    operandLast = true;
}

let operandLast = false;
