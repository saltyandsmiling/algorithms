const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

function mergeArrays(arrOne, arrTwo) {
  const mergedArr = [];
  while (arrOne.length || arrTwo.length) {
    if (arrOne[0] <= arrTwo[0]) {
      mergedArr.push(arrOne.shift());
    } else {
      mergedArr.push(arrTwo.shift());
    }

  }
  return mergedArr;
}

console.log(mergeArrays(myArray, alicesArray));
