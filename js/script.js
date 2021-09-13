/* JavaScript */
let result = null;
let firstOperand = null;
let secondOperand = null; 
const numbers = document.querySelectorAll(".number");
const screen = document.getElementById("calculator_screen");
const operators = document.querySelectorAll(".operator");

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
    numbers.addEventListener('click', (e) => {
        displayValue(e.target.textContent);
    })
})