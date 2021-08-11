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
  if (action != null) {
    previousResult.innerText = previousAction + action;
  } else {
    previousResult.innerText = '';
  }
};

const clearAll = () => {
  currentAction = '';
  previousAction = '';
  action = undefined;
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

const count = () => {
  let operation;
  if (!previousAction || !currentAction) {
    return;
  }

  const previous = parseFloat(previousAction);
  const current = parseFloat(currentAction);

  if (isNaN(previous) || isNaN(current)) {
    return;
  }

  switch (action) {
    case '+':
      action = previous + current;
      break;
    case '-':
      action = previous - current;
      break;
    case '×':
      action = previous * current;
      break;
    case '÷':
      if (current === 0) {
        alert('Division by zero forbidden!');
        clearAll();
        return;
      }
      action = previous / current;
      break;
    case '√':
      action = Math.pow(previous, 1 / current);
      break;
    case '%':
      action = (previous / 100) * current;
      break;
    case '^':
      action = Math.pow(previous, current);
      break;
    case 'log':
      action = Math.log(previous) / Math.log(current);
      break;
    default:
      return;
  }

  currentAction = action;
  operation = undefined;
  previousAction = '';
};

const chooseAction = (operator) => {
  if (currentAction === '') {
    return;
  }
  if (previousAction !== '') {
    const previous = previousResult.innerText;
    if (
      currentAction.toString() === '0' &&
      previous[previous.length - 1] === '÷'
    ) {
      alert('Division by zero forbidden!');
      clearAll();
      return;
    }
    count();
  }
  action = operator;
  previousAction = currentAction;
  currentAction = '';
};

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    add(number.innerText);
    updateResult();
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    chooseAction(operator.innerText);
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

equals.addEventListener('click', () => {
  count();
  updateResult();
});
