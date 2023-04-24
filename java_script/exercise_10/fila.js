const arr = [];
let option = "";

do {
  let pacientes = "";
  for (let i = 0; i < arr.length; i++) {
    pacientes += i + 1 + "º - " + arr[i] + "\n";
  }

  option = prompt(
    "Pacientes:\n" +
      pacientes +
      "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  );
  switch (option) {
    case "1":
      let insert = prompt("Enter the name of the person you want to include");
      arr.push(insert);
      alert(`The pacient add is ${insert}`);
      break;

    case "2":
      let pacient = arr.shift();
      if (!pacient) {
        alert("The list os pacients is empty!");
      } else {
        alert("patient removed " + pacient);
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
