// let trailingDecimal = /^.$/;    // maybe add functionality later

function add(a, b) {
    return (a + b).toFixed(5);
}

function subtract(a, b) {
    console.log(typeof(a - b));
    return (a - b).toFixed(5);
}

function multiply(a, b) {
    return (a * b).toFixed(5);
}

function divide(a, b) {
    return (a / b).toFixed(5);
}

function operate(operator, a, b) {
    if (operator == "add") return add(a, b);
    else if (operator == "subtract") return subtract(a, b);
    else if (operator == "multiply") return multiply(a, b);
    else if (operator == "divide") return divide(a, b);
}

function clearDisplay() {
    display.textContent = "";
}

function operatorPressed(operator) {
    let a = parseFloat(display.textContent);
    clearDisplay();
    equalsButton.addEventListener('click', function displayResults() {
        display.textContent = operate(operator, a, parseFloat(display.textContent));
        equalsButton.removeEventListener('click', displayResults);
    });
}



let display = document.querySelector("#display");

let numbers = document.querySelectorAll(".number");
numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.textContent += number.textContent;
    });
});

let operators = document.querySelectorAll(".operator");
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operatorPressed(operator.id);
    });
});

let clearButton = document.querySelector("#clear")
        .addEventListener('click', () => clearDisplay());

let equalsButton = document.querySelector("#equals");