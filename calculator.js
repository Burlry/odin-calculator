const container = document.querySelector('.container');
const display = document.querySelector('.display');

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
console.log(buttons);
buttons.forEach((button) => {
    button.onclick = () => {
        if ("1234567890".includes(button.textContent)) {
            numberPress(button);
        } else if (button.textContent == "%" || "/" || "*" || "-" || "+") {
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
    if (operandLast === false) {
        if (display.textContent === "0") {
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    } else {
        num1 = display.textContent;
        operandLast = false;
        
    }
};

const operandPress = function(button) {
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

};

const equalsPress = function() {

}
