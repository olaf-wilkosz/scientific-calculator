const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const allClear = document.querySelector('.all-clear');
const clearEntry = document.querySelector('.clear-entry');
const equals = document.querySelector('.equals');
const previousActionResult = document.querySelector('.previous-result');
const currentActionResult = document.querySelector('.current-result');

let currentResult = '';
let previousResult = '';
let action = undefined;

const updateResult = () => {
  currentActionResult.innerText = currentResult;
  previousActionResult.innerText = previousResult;
};

const add = (number) => {
  currentResult = currentResult.toString() + number.toString();
};

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    add(number.innerText);
    updateResult();
  });
});
