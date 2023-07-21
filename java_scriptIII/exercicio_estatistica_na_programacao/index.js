const mediaAritmetica = (...numbers) => {
  return numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
};

const mediaPonderada = (...numbers) => {
  let totalWeight = numbers.reduce((acc, numbers) => acc + numbers.p, 0);
  let weightedSum = numbers.reduce(
    (acc, numbers) => acc + numbers.n * numbers.p,
    0
  );
  return weightedSum / totalWeight;
};

const mediana = (...numbers) => {
  if (numbers.length % 2 != 0) {
    let number = Math.floor(numbers.length / 2);
    console.log(number);
    let median = numbers[number];
    return median;
  } else {
    let number = Math.floor(numbers.length / 2);
    let median = (numbers[number - 1] + numbers[number]) / 2;
    return median;
  }
};

const moda = (...numbers) => {
  let freqMap = {}; // 1
  let maxCount = 0; // 2
  let mode; // 3

  for (let num of numbers) {
    console.log(num)
    // 4
    freqMap[num] = (freqMap[num] || 0) + 1; // 5
    if (freqMap[num] > maxCount) {
      // 6
      maxCount = freqMap[num]; // 7
      mode = num; // 8
    }
  }
  return mode; // 9
};

console.log(mediaAritmetica(4, 4, 4, 4));
console.log(mediaPonderada({ n: 5, p: 2 }, { n: 5, p: 1 }));
console.log(mediana(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11));
console.log(moda(1, 2, 2, 3, 3, 3,5,5,5,5,5,5)); // 10
