const unsortedScores = [3, 5, 6, 7, 7, 10];
const HIGHEST_POSSIBLE_SCORE = 10;

function sortedScores(scores, upperBound) {
  // check that upperbound is 1 or greater, check that scores is an array

  const allPossibleScores = new Array(upperBound + 1).fill(0);
  const result = [];
  unsortedScores.forEach(el => allPossibleScores[el] += 1 );

  for (let i = upperBound; i >= 0; i -= 1) {
    if (allPossibleScores[i]) {
      while (allPossibleScores[i]) {
        result.push(i);
        allPossibleScores[i] -= 1;
      }
    }
  }
  console.log(result);
}

sortedScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);