function sum(param, ...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0);
}

console.log(sum(3, 4, 5, 6, 7, 8));
