function fib(n) {
  const cache = {};

  const fibNum = (n) => {
    if (n === 0) return 0;
    if (n <= 2) return 1;

    return fib(n - 1) + fib(n - 2)
  };

  return fibNum(n);
}

console.log(fib(7));

