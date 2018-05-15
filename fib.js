function fib(n) {
  if (n === 0 || n === 1) return n;
  let a = 0;
  let b = 1;
  /*
  are you ok with this
   */
  for (let i = 0; i < n; i += 1) {
    const c = a + b;
    a = b;
    b = c;
  }
  return a;
}

console.log(fib(7));

