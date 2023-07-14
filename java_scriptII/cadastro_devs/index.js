const form = document.getElementById("devForm");

const infosDevs = [];
let inputRows = 0;

form.addEventListener("submit", function (env) {
  env.preventDefault();

  const h3 = document.createElement("h3");
  h3.innerText = "Nome da Tecnologia:";
  h3.id = "nameTecTitle";
  h3.className = "nameTecTitle";

  const textArea = document.createElement("input");
  textArea.id = "nameTec";
  textArea.className = "nameTec";
  textArea.type = "text";

  const radioButtons = [
    {
      label: "0-2 anos",
      name: "infos",
      id: "option1",
      value: "value1",
    },
    {
      label: "3-4 anos",
      name: "infos",
      id: "option2",
      value: "value2",
    },
    {
      label: "+5 anos",
      name: "infos",
      id: "option3",
      value: "value3",
    },
  ];

  const labelInfos = document.createElement("div");
  radioButtons.forEach((radioButton) => {
    const label = document.createElement("label");
    const button = document.createElement("input");
    label.innerText = radioButton.label;
    button.type = "radio";
    button.name = `${radioButton.name}-${inputRows}`;
    button.id = `${radioButton.id}-${inputRows}`;
    inputRows++;
    button.value = radioButton.value;
    label.appendChild(button);
    labelInfos.appendChild(label);
  });

  const registerButton = document.createElement("button");
  registerButton.innerText = "Registrar";
  registerButton.type = "button";
  registerButton.addEventListener("click", function (e) {
    e.stopPropagation();

    // Get the values of the input fields
    let nameTecValue = document.getElementById("nameTec").value;
    let selectedRadioValue;
    for (let radioButton of radioButtons) {
      let selectedButton = document.querySelector(
        `input[name="${radioButton.name}"]:checked`
      );
      if (selectedButton) {
        selectedRadioValue = selectedButton.value;
        break;
      }
    }

    // Add the data to the formData array
    infosDevs.push({
      nameDev: document.getElementById("name").value,
      nameTec: nameTecValue,
      selectedOption: selectedRadioValue,
    });

    // Display the formData array
    console.log(infosDevs);
  });

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remover";
  removeButton.type = "button"; // specify the button type to prevent it from submitting the form
  removeButton.addEventListener("click", function (e) {
    e.stopPropagation();
    document.getElementById("devForm").removeChild(labelInfos);
    document.getElementById("devForm").removeChild(registerButton);
    document.getElementById("devForm").removeChild(textArea);
    document.getElementById("devForm").removeChild(h3);
    document.getElementById("devForm").removeChild(removeButton);
  });

  form.appendChild(h3);
  form.appendChild(textArea);
  form.appendChild(labelInfos);
  form.appendChild(registerButton);
  form.appendChild(removeButton);
});
