const arr = [];
let option = "";

do {
  let cards = "";
  for (let i = 0; i < arr.length; i++) {
    cards += i + 1 + "º - " + arr[i] + "\n";
  }

  option = prompt(
    "Cards\n" +
      cards +
      "\nChoise once option:\n1 - New card\n2 - Pull a card\n3 - Quit"
  );
  switch (option) {
    case "1":
      let insert = prompt("Enter the name of the card you want to include");
      arr.unshift(insert);
      alert(`The card add is ${insert}`);
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
