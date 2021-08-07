const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const allClear = document.querySelector('.all-clear');
const clearEntry = document.querySelector('.clear-entry');
const equals = document.querySelector('.equals');
const previousResult = document.querySelector('.previous-result');
const currentResult = document.querySelector('.current-result');

let currentResult = '';
let previousResult = '';
let action = undefined;
