const firstCharacterName = Number(
  prompt("Insert the name of the first character :  ")
);
const powerFirstCharacter = Number(
  prompt("Insert the power of the first character :  ")
);
const secondCharacterName = Number(
  prompt("Insert the name of the second character :  ")
);
let amountLifeSecondCharecter = Number(
  prompt("Insert the amount of life of the second character :  ")
);
const powerDefenseSecondCharacter = Number(
  prompt("Insert the power of defense of the second character : ")
);
const shieldSecondCharacter = prompt("The second character have a shield ?");

if (
  powerFirstCharacter > powerDefenseSecondCharacter &&
  shieldSecondCharacter == "No"
) {
  console.log(
    `${
      "O dano causado foi de" +
      " " +
      powerFirstCharacter -
      powerDefenseSecondCharacter
    }!`
  );
  new_amountLifeSecondCharecter =
    amountLifeSecondCharecter -
    (powerFirstCharacter - powerDefenseSecondCharacter);
  console.log(
    `The life of the second character now is ${new_amountLifeSecondCharecter}`
  );
} else if (
  powerFirstCharacter > powerDefenseSecondCharacter &&
  shieldSecondCharacter == "Yes"
) {
  console.log(
    `${
      "O dano causado foi de" +
      " " +
      (powerFirstCharacter - powerDefenseSecondCharacter) / 2
    }!`
  );
  new_amountLifeSecondCharecter =
    amountLifeSecondCharecter -
    (powerFirstCharacter - powerDefenseSecondCharacter) / 2;
  console.log(
    `The life of the second character now is ${new_amountLifeSecondCharecter}`
  );
} else if (powerFirstCharacter <= powerDefenseSecondCharacter) {
  console.log(`${"The damage done was 0!"}!`);
  `The life of the second character now is ${amountLifeSecondCharecter}`;
}
