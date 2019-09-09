 // FUNCTIONS
 
 let trailingZeros = /.0+$/;

function add(a, b) {
    return (parseFloat(a) + parseFloat(b)).toFixed(5).replace(trailingZeros, '');
}

function subtract(a, b) {
    return (a - b).toFixed(5).replace(trailingZeros, '');
}

function multiply(a, b) {
    return (a * b).toFixed(5).replace(trailingZeros, '');
}

function divide(a, b) {
    return (a / b).toFixed(5).replace(trailingZeros, '');
}

function operate(operator, a, b) {
    if (operator == "add") return add(a, b);
    else if (operator == "subtract") return subtract(a, b);
    else if (operator == "multiply") return multiply(a, b);
    else if (operator == "divide") return divide(a, b);
}

function clearAll() {
    display.textContent = "";
    operatorArray = [];
    numberArray = [];
}

function clearDisplay() {
    display.textContent = "";
}

function operatorPressed(operator) {
    numberArray.push(parseFloat(display.textContent));
    clearDisplay();
    operatorArray.push(operator);
}

function evaluateOperations() {
    numberArray.push(parseFloat(display.textContent));
    
    if (isNaN(numberArray[numberArray.length - 1])) {
        numberArray[numberArray.length - 1] = 0;
    }

    let total = operate(operatorArray[0], numberArray[0], numberArray[1]);
    for (let i = 1; i < operatorArray.length; i++) {
        total = operate(operatorArray[i], total, numberArray[i+1]);
    }

    display.textContent = total;
    operatorArray = [];
    numberArray = [];
}

function checkKey(e) {
    if ((e.keyCode >= 48 && e.keyCode <= 57) || e.keyCode == 190) {
        if (e.key == '*') operatorPressed("multiply");
        else display.textContent += e.key;
    }
    else if (e.key == '+') operatorPressed("add");
    else if (e.keyCode == 189) operatorPressed("subtract");
    else if (e.keyCode == 191) operatorPressed("divide");
    else if (e.keyCode == 67) clearAll();
    else if (e.keyCode == 13 || e.keyCode == 187) evaluateOperations();
}

// DOM INITIATION

let display = document.querySelector("#display");

let numbers = document.querySelectorAll(".number");
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (display.textContent === "0") display.textContent = number.textContent;
        else display.textContent += number.textContent;
    });
});

let operators = document.querySelectorAll(".operator");
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operatorPressed(operator.id);
    });
});

let clearButton = document.querySelector("#clear")
        .addEventListener('click', () => clearAll());

let equalsButton = document.querySelector("#equals");
equalsButton.addEventListener('click', evaluateOperations);

let backspaceButton = document.querySelector("#backspace");
backspaceButton.addEventListener('click', () => {
    let displayArray = display.textContent.split('');
    displayArray.pop();
    display.textContent = displayArray.join('');
})

window.addEventListener('keydown', checkKey);


let operatorArray = [];
let numberArray = [];