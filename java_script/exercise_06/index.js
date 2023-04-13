let option = Number(
  prompt(
    "1) Option 1 \n 2) Option 2 \n 3) Option 3 \n 4) Option 4 \n 5) Finished"
  )
);

while (option !== 5) {
  switch (option) {
    case 1:
      alert("Option 1 chosen");
      option = prompt(
        "1) Option 1 \n 2) Option 2 \n 3) Option 3 \n 4) Option 4 \n 5) Finished"
      );

    case 2:
      alert("Option 2 chosen");
      option = prompt(
        "1) Option 1 \n 2) Option 2 \n 3) Option 3 \n 4) Option 4 \n 5) Finished"
      );

    case 3:
      alert("Option 3 chosen");
      option = prompt(
        "1) Option 1 \n 2) Option 2 \n 3) Option 3 \n 4) Option 4 \n 5) Finished"
      );

    case 4:
      alert("Option 4 chosen");
      option = prompt(
        "1) Option 1 \n 2) Option 2 \n 3) Option 3 \n 4) Option 4 \n 5) Finished"
      );

    case 5:
      alert("The program is ending");
      break;
  }
}
