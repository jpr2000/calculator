function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
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
    let a = display.textContent;
    clearDisplay();
    equalsButton.addEventListener('click', function displayResults() {
        console.log("clicked :)");
        let b = display.textContent;
        console.log(a);
        console.log(b);
        display.textContent = operate(operator, a, display.textContent);
        equalsButton.removeEventListener('click', displayResults);
    }); // displayResults(operator, a)
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