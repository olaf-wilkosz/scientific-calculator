const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const allClear = document.querySelector('.all-clear');
const clearEntry = document.querySelector('.clear-entry');
const equals = document.querySelector('.equals');
const previousResult = document.querySelector('.previous-result');
const currentResult = document.querySelector('.current-result');

let currentAction = '';
let previousAction = '';
let action = undefined;

const updateResult = () => {
  currentResult.innerText = currentAction;
  previousResult.innerText = previousAction;
};

const clearAll = () => {
  currentAction = '';
  previousAction = '';
  updateResult();
};

const deleteLast = () => {
  currentAction = currentAction.toString().slice(0, -1);
};

const add = (number) => {
  if (number === '•') {
    if (currentAction === '') {
      currentAction = '0';
    } else if (currentAction.includes('.')) {
      return;
    }
    number = '.';
  }
  currentAction = currentAction.toString() + number.toString();
};

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    add(number.innerText);
    updateResult();
  });
});

allClear.addEventListener('click', () => {
  clearAll();
  updateResult();
});

clearEntry.addEventListener('click', () => {
  deleteLast();
  updateResult();
});
