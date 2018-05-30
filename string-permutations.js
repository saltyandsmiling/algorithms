const string = 'cat';

function getPermutations(string) {
  // base case
  if (string.length <= 1) {
    return new Set(string);
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];
  // console.log(allCharsExceptLast)
  // recursive call: get all possible permutations for all chars except last
  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

  // put the last char in all possible positions for each of the above permutations
  const permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach((el) => {
    console.log(el, allCharsExceptLast, lastChar);
    for (let position = 0; position <= allCharsExceptLast.length; position += 1) {
      const permutation = el.slice(0, position) + lastChar + el.slice(position);
      permutations.add(permutation);
    }
  });
  return permutations;
}

console.log(getPermutations(string));
