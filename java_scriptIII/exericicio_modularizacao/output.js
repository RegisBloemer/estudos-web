const main = document.querySelector("main");
const root = document.querySelector(":root");
const resultInput = document.getElementById("result");

function copyToClipboard(copy) {
  document.getElementById(copy).addEventListener("click", function (ev) {
    const button = ev.currentTarget;
    if (button.innerText === "Copy") {
      button.innerText = "Copied";
      button.classList.add("success");
      navigator.clipboard.writeText(resultInput.value);
    } else {
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  });
}

function blackOrWhite(themeSwitcher) {
  document.getElementById(themeSwitcher).addEventListener("click", function () {
    if (main.dataset.theme === "dark") {
      root.style.setProperty("--bg-color", "#f1f5f9");
      root.style.setProperty("--border-color", "#aaa");
      root.style.setProperty("--font-color", "#212529");
      root.style.setProperty("--primary-color", "#26834a");
      main.dataset.theme = "light";
    } else {
      root.style.setProperty("--bg-color", "#212529");
      root.style.setProperty("--border-color", "#666");
      root.style.setProperty("--font-color", "#f1f5f9");
      root.style.setProperty("--primary-color", "#4dff91");
      main.dataset.theme = "dark";
    }
  });
}

export { copyToClipboard, blackOrWhite };
