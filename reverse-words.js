const message = ['c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l'];

function reverseWords(inputArr) {
  let leftIndex = 0;
  let rightIndex = message.length - 1;

  function reverseString() {
    // walk towards the middle, from both sides
    while (leftIndex < rightIndex) {

      // swap the left char and right char
      const temp = message[leftIndex];
      inputArr[leftIndex] = inputArr[rightIndex];
      inputArr[rightIndex] = temp;
      leftIndex++;
      rightIndex--;
    }
  }
  reverseString();
  leftIndex = 0;
  for (let i = 0; i <= inputArr.length; i += 1) {
    if (inputArr[i] === ' ' || i === inputArr.length) {
      rightIndex = i - 1;
      reverseString();
      leftIndex = i + 1;
    }
  }

}

reverseWords(message);

console.log(message.join(''));
// prints: 'steal pound cake'