const input = document.querySelector("input");
const resultInput = document.getElementById("result");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

function querySelected(charKey) {
  document.querySelectorAll(`.${charKey}`).forEach(function (charKeyButton) {
    charKeyButton.addEventListener("click", function () {
      const value = charKeyButton.dataset.value;
      input.value += value;
    });
  });
}

function inputId(id) {
  document.getElementById(id).addEventListener("click", function (ev) {
    input.value = "";
    input.focus();
  });
}
function getEqual(equal) {
  document.getElementById(equal).addEventListener("click", calculate);
}

function evenListener(event) {
  input.addEventListener(event, function (ev) {
    ev.preventDefault();
    if (allowedKeys.includes(ev.key)) {
      input.value += ev.key;
      return;
    }
    if (ev.key === "Backspace") {
      input.value = input.value.slice(0, -1);
    }
    if (ev.key === "Enter") {
      calculate();
    }
  });
}

function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");

  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}

export {
  inputId,
  querySelected,
  getEqual,
  evenListener,
};
