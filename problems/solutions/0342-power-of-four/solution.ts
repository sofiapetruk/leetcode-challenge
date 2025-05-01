function isPowerOfFour(n: number): boolean {
  if (n <= 0) return false;

  var value: number = Math.log(n) / Math.log(4);

  return Number.isInteger(value);
}
