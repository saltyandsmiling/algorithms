const string = ['a', 'b', 'c', 'd', 'e', 'f'];

function reverseString(inputString) {
  // check if input is an array and if that array has more than 1 element

  let i;
  const inputCopy = inputString.slice();
  const inputLength = inputCopy.length;
  const halfLength = Math.floor((inputLength / 2));

  for (i = 0; i < halfLength; i += 1) {
    const beginningItem = inputCopy[i];
    inputCopy[i] = inputCopy[inputLength - i - 1];
    inputCopy[inputLength - i - 1] = beginningItem;
  }

  return inputCopy;
}

console.log(reverseString(string), string);