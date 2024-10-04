const container = document.querySelector('.container');
const display = document.querySelector('.display');

const add = function(a,b) {
    return Number(a) + Number(b);
};

const subtract = function(a,b) {
    return a - b;
};

const multiply = function(a,b) {
    return a * b;
};

const divide = function(a,b) {
    if (b === 0) {
        return "No";
    } else {
    return (a / b).toFixed(8);
}};

console.log(divide(2,0))

const remainder = function(a,b) {
    return a % b;
};

let num1;
let num2;
let operand;

let operandLast = false;
let operateReady = false;

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
    };
};

let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.onclick = () => {
        if ("1234567890".includes(button.textContent)) {
            numberPress(button);
        } else if ("%/*-+".includes(button.textContent)) {
            operandPress(button);
        } else if (button.textContent == "+/-") {
            negativePress();
        } else if (button.textContent == "AC") {
            clearPress();
        } else if (button.textContent == ".") {
            decimalPress();
        } else if (button.textContent == "=") {
            equalsPress();
        };
    };
});

const numberPress = function(button) {
    if (display.textContent.length < 11) 
    if (operandLast === false) {
        if (display.textContent === "0") {
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    } else {
        num1 = display.textContent;
        operandLast = false;
        display.textContent = button.textContent;
    }
};

const operandPress = function(button) {
    if (operateReady === true) {
        equalsPress();
    }
    num1 = display.textContent;
    operand = button.textContent;
    operandLast = true;
};

const negativePress = function() {
    let tempNegative = display.textContent;
    tempNegative *= -Number(tempNegative);
    display.textContent = tempNegative;
};

const clearPress = function() {
    display.textContent = "0";
    num1 = undefined;
    num2 = undefined;
    operand = undefined;
    operandLast = false;
    operateReady = false;
};

const decimalPress = function() {
    if (display.textContent.includes(".")) {
        return;
    } else {
        display.textContent += ".";
    }
};

const equalsPress = function() {
    num2 = display.textContent;
    display.textContent = operate(num1,num2,operand);
    num1 = display.textContent;
    operand = undefined;
    num2 = undefined;
}
