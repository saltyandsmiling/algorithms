const arr = [1, 3, 4, 6, 2, 3, 5, 7];

function findRepeat(input) {
  const sortedArr = input.sort((a, b) => a - b);
  console.log(arr)
  for (let i = 0; i < sortedArr.length; i += 1) {
    if (sortedArr[i] === sortedArr[i + 1]) return sortedArr[i];
  }


  return false;
}

console.log(findRepeat(arr));
