let value = Number(prompt("Add the amount of money you have:"));
let option = Number(
  prompt(
    `R$ ${value} is the amount of money you have, what do you make to do? \n 1) Add money \n 2) Remove money \n 3) Quit `
  )
);

while (option !== 3) {
  switch (option) {
    case 1:
      moneyAdd = Number(prompt("How much money you want to add?"));
      value += moneyAdd;
      option = Number(
        prompt(
          `OK! , the money in your count now is R$ ${value}, what do you make to do? \n 1) Add money \n 2) Remove money \n 3) Quit `
        )
      );

    case 2:
      moneyAdd = Number(prompt("How much money you want to remove?"));
      value -= moneyAdd;
      option = Number(
        prompt(
          `OK! , the money in your wallet+ now is R$ ${value}, what do you want to do? \n 1) Add money \n 2) Remove money \n 3) Quit `
        )
      );

    case 3:
      alert("The program is finished!");
      break;
  }
}
