const arr = [];
let option = "";

do {
  option = prompt(
    "Number of registered properties:"` ${arr.length}\n` +
      "Cards\n" +
      cards +
      "\nChoise once option:\n1 - New property\n2 - Pull a card\n3 - Quit"
  );
  switch (option) {
    case "1":
      let insert = prompt("Enter the name of the property you want to save:");
      arr.unshift(insert);
      alert(`The property add is ${insert}`);
      break;

    case "2":
      let card = arr.shift();
      if (!card) {
        alert("The list of cards is empty!");
      } else {
        alert("Card removed is" + card);
      }
      break;

    case "3":
      alert("Program is shutting down");
      break;

    default:
      alert("Please choise an valid option!");
      break;
  }
} while (option !== "3");
