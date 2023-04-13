const nameTourist = prompt("What is your name? ");
const cityVisited = prompt("You was visit any city?");
let namesCity = [];

while (cityVisited === "Yes") {
  const nameCity = prompt("What is the name of the city you visited?");
  namesCity.push(nameCity);
  cityVisited = prompt("You was visit any other city?");
}

alert(
  `The number of cityes visited as ${namesCity.length}, and these are ${namesCity}`
);
