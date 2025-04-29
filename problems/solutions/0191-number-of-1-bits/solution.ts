function hammingWeight(n: number): number {
  var number: string = (n >>> 0).toString(2).replaceAll('0', ''); // convert to binary

  var stringToNumber: number = parseInt(number); // convert to number

  for (let i = 0; i <= number.length; i++) {
    stringToNumber = i; // attribute counter to variable that will be returned
  }

  return stringToNumber;
}

// 1. Transformar em binário
// 2. Pegar quantidade de 1 no binário
