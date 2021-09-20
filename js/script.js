/* JavaScript */
let result = null;
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
const numbers = document.querySelectorAll(".number");
const screen = document.getElementById("screen");
const operators = document.querySelectorAll(".operator");
const equal = document.getElementById("equal");

clearScreen();

function add(a,b){
    return a+b;
}
function multiply(a, b){
    return a*b;
}
function minus(a, b){
    return a-b;
}
function divide(a, b){
    return a/b;
}
function del(){
    result = null;
    firstOperand = null;
    secondOperand = null;
}

function screenValue(){
    return screen.textContent;
}

function saveOperand(value){
    if (firstOperand == null){
        firstOperand = value;
    }else{
        secondOperand == value;
    }

}

function saveOperator(operator){
    if (currentOperator == null){
        currentOperator = operator;
    }else if(firstOperand != null && secondOperand !=null){
        result = operate(+firstOperand, +secondOperand, currentOperator);
        clearScreen();
        displayValue(result);
        firstOperand = result;
        secondOperand = null;
        currentOperator = operator;
    }
}



function operate(a, b, operator){
    switch (operator){
        case "add":
            return add(a, b);
            break;
        case "multiply":
            return multiply(a, b);
            break;
        case "minus":
            return minus(a, b);
            break;
        case "divide":
            return divide(a, b);
            break;
    }
}
function clearScreen(){
    screen.textContent = "";
}
function displayValue(value){
    screen.textContent = screen.textContent + value;
}
numbers.forEach(numbers => {
    numbers.addEventListener('click', () => {
        displayValue(numbers.textContent);
        console.log(numbers.textContent);
    })
})
operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        saveOperand(screenValue());
        saveOperator(e.target.id);
        clearScreen();
    })
})
equal.addEventListener("click", () =>{
    clearScreen();
    displayValue(result);
})