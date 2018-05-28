const string = 'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.';

function matchingParen(index, inputString) {
  // if inputstring at index is an opening paren
  let i;
  let parenCounter = 0;
  for (i = index; i < inputString.length; i += 1) {
    if (inputString[i] === '(') parenCounter += 1;
    if (inputString[i] === ')') parenCounter -= 1;
    if (parenCounter === 0) return i;
  }
  return 'no closing paren';
}

console.log(matchingParen(10, string));
