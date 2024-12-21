let currentInput = '';
let operation = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function chooseOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = '';
  updateDisplay();
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  
  if (isNaN(prev) || isNaN(current)) return;
  
  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert("Cannot divide by zero");
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }
  
  currentInput = result.toString();
  operation = '';
  previousInput = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

// Handle Decimal Point
function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

// Handle Percentage
function calculatePercentage() {
  if (currentInput !== '') {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
  }
}

// Toggle the Sign of the Current Number
function toggleSign() {
  if (currentInput !== '') {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
  }
}