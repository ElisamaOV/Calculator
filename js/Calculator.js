let addToScreen = (value) => {
  document.getElementById('screen').value += value;
};

let clearScreen = () => {
  document.getElementById('screen').value = '';
};

let calculate = () => {
  let operation = document.getElementById('screen').value;
  let firstNumber = 0;
  let secondNumber = 0;
  let operator = '';

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //UTILIZAR ESTO COMO PRUEBA PARA PARAR BUCLE EN CASO DE QUE LA CUENTA DE OPERADORES SEA MAYOR A 1
  let operatorCount = -1;
  for (let i = 0; i < operation.length; i++) {
    if (isNaN(operation[i]) == false && isNaN(operation[i + 1]) == true) {
      operatorCount++;
    }
  }
  if (operatorCount >= 2) {
    document.getElementById('screen').value = 'E';
    return;
  }
  //UTILIZAR ESTO COMO PRUEBA PARA PARAR BUCLE EN CASO DE QUE LA CUENTA DE OPERADORES SEA MAYOR A 1
  //https://medium.com/@ryan_forrester_/javascript-exit-functions-a-complete-guide-dea460cbe73e#:~:text=JavaScript%20provides%20several%20ways%20to,and%20breaking%20out%20of%20loops.
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  let pos = -1;
  for (let i = 0; i < operation.length && pos == -1; i++) {
    if (isNaN(operation[i]) == false && isNaN(operation[i + 1]) == true) {
      pos = i + 1;
      operator = operation[pos];
    }
  }

  firstNumber = parseInt(operation.substring(0, pos));
  secondNumber = parseInt(operation.substring(pos + 1));

  let operationResult = operate(firstNumber, secondNumber, operator);
  if (isNaN(operationResult) == true) {
    document.getElementById('screen').value = 'E';
  } else {
    document.getElementById('screen').value = operationResult;
  }
};

let operate = (firstNumber, secondNumber, operator) => {
  let result = 'E';
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '/':
      result = secondNumber != 0 ? firstNumber / secondNumber : 'E';
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
  }
  return result;
};
