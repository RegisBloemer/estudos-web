const velocidadeCarro1 = prompt(
  "Coloque a velocidade do primeiro carro aqui: "
);
const velocidadeCarro2 = prompt("Coloque a velocidade do segundo carro aqui: ");

if (Number(velocidadeCarro1) > Number(velocidadeCarro2)) {
  console.log("O carro 1 é mais rápido");
} else if (Number(velocidadeCarro1) === Number(velocidadeCarro2)) {
  console.log("Os carros tem a mesma velocidade!");
} else {
  console.log("O carro 2 é mais rápido");
}
