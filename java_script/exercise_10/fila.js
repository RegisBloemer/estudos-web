const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];

let formattedArr = "";

for (let index = 0; index < arr.length; index++) {
  formattedArr += `${index + 1} - ${arr[index]} \n`;
}

let option = Number(
  prompt(
    `${formattedArr} \n\nChoose the option: \n1) New Patient \n2) Consult Patient \n 3)Quit`
  )
);

while (option !== 3) {
  switch (option) {
    case 1:
      let insert = prompt("Enter the name of the person you want to include");
      arr.push(insert);
      let formattedArr = "";
      for (let index = 0; index < arr.length; index++) {
        formattedArr += `${index + 1} - ${arr[index]} \n`;
      }
      alert(`${formattedArr}`);

    case 2:
      arr.shift("Frodo");
      for (let index = 0; index < arr.length; index++) {
        arr.shift(`${index + 1} - ${arr[index]}`);
      }
      alert(arr);
  }
}
