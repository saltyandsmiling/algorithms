const ints = [-5, -5, 5, 10];

/*
greedy solution
keeping track of bestOfThree, lowestTwo, HighestTwo, Low, High
 */


function prodOfThree(ints) {
  let i;
  const inputLength = ints.length;
  let bestOfThree = ints[0] * ints[1] * ints [2];
  let lowestTwo = ints[0] * ints[1];
  let highestTwo = ints[0] * ints[1];
  let low = Math.min(ints[0], ints[1]);
  let high = Math.max(ints[0], ints[1]);

  for (i = 1; i < inputLength; i++) {
    bestOfThree = Math.max(
        bestOfThree,
        lowestTwo * ints[i],
        highestTwo * ints[i]
    );
    highestTwo = Math.max(highestTwo, ints[i] * high);
    lowestTwo = Math.max(lowestTwo, low * ints[i]);
    low = Math.min(low, ints[i]);
    high = Math.max(high, ints[i]);


  }

  console.log(bestOfThree)
}

prodOfThree(ints);