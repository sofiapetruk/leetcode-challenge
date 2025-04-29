function fib(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let fibonacci: number = 0;

  fibonacci = fib(n - 1) + fib(n - 2);

  return fibonacci;
}
