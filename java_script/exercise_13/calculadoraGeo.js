const arr = [];
let option = "";

function triangleArea(base, hight) {
  return (base * hight) / 2;
}

function retangleArea(base, hight) {
  return base * hight;
}

function squareArea(side) {
  return side * side;
}

function trapezeArea(baseMT, baseMeT, hight) {
  return ((baseMT + baseMeT) * hight) / 2;
}

function circleArea(ray) {
  return ray * ray * 3.14;
}

do {
  option = prompt(
    "\nChoise once option:\n1 - triangle area: base * height / 2 \n2 - rectangle area: base * heigh" +
      "\n3 - area of square: side² \n4 - area of the trapezoid: (larger base + smaller base) * height / 2" +
      "\n5 - área do círculo: pi * raio² (considere pi = 3.14)"
  );
  switch (option) {
    case "1":
      let baseT = Number(prompt("Enter the base of the triangle:"));
      let hightT = Number(prompt("Enter the hight of the triangle:"));

      alert(`The area of the triangle is ${triangleArea(baseT, hightT)}`);
      break;

    case "2":
      let baseR = Number(prompt("Enter the base of the triangle:"));
      let hightR = Number(prompt("Enter the hight of the triangle:"));

      alert(`The area of the retangle is ${retangleArea(baseR, hightR)}`);
      break;

    case "3":
      let side = Number(prompt("Enter the minor base of the square:"));

      alert(`The area of the square is ${squareArea(side)}`);
      break;

    case "4":
      let baseMT = Number(prompt("Enter the bigger base of the trapeze:"));
      let baseMeT = Number(prompt("Enter the minor base of the trapeze:"));
      let hight = Number(prompt("Enter the higth of the trapeze:"));
      alert(`The area of the square is ${trapezeArea(baseMT, baseMeT, hight)}`);
      break;

    case "5":
      let ray = Number(prompt("Enter the ray of the circle:"));
      alert(`The area of the circle is ${circleArea(ray)}`);
      break;

    case "6":
      alert("The program is finished...");
      break;

    default:
      alert("Please choise an valid option!");
      break;
  }
} while (option !== "6");
