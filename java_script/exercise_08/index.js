const numberChoise = prompt("What number between 1 and 20, you want choise ? ");

let result = [];

for (let number = 1; number <= 10; number++) {
  result.push(`${numberChoise} times ${number} it is ${number * numberChoise}`);
}

alert (result)