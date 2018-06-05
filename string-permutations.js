const str = 'abc';

function getPermutations(string) {
  if (string.length <= 1) return new Set(string);

  const allCharExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  const perms = getPermutations(allCharExceptLast);

  const permSet = new Set();
  perms.forEach((el) => {
    for (let i = 0; i <= allCharExceptLast.length; i += 1) {
      const currentPerm = el.slice(0, i) + lastChar + el.slice(i);
      permSet.add(currentPerm);
    }
  });
  return permSet;
}

console.log(getPermutations(str));
