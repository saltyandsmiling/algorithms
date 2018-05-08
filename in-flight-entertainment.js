const movies = [25, 30, 60, 75, 70];

const flight = 90;

/*
greedy algorithm
walk through array putting amounts desired (flighttime - array[i])

 */

function findTwo (movies, flight) {
  let i;
  const timesNeeded = {};

  /*
  does array have at least two elements
  is flight time an integer
   */

  for (i = 0; i < movies.length; i++) {
    if (timesNeeded[movies[i]]) {
      return true;
    } else {
      let difference = flight - movies[i];
      timesNeeded[difference] = movies[i];
    }

  }
  return false;

}

console.log(findTwo(movies, flight));