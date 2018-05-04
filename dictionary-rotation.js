const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

/*
use a binary search
keep track of a floor, ceiling and midpoint
is the word at the midpoint is greater than the midpoint go right, otherwise go left


 */

function rotationPoint (words) {
  let floor = 0;
  let ceiling = words.length - 1;

  while (floor < ceiling) {
    let midpoint = Math.floor(floor + ((ceiling - floor) / 2));

    if (words[midpoint] >= words[floor]) {
      floor = midpoint;
    } else {
      ceiling = midpoint;
    }

    if (floor + 1 === ceiling) {
      break;

    }
  }

  return words[ceiling]
}

console.log(rotationPoint(words));







const firstWord = words[0];

var floorIndex = 0;
var ceilingIndex = words.length - 1;

while (floorIndex < ceilingIndex) {

  // guess a point halfway between floor and ceiling
  var guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

  // if guess comes after first word or is the first word
  if (words[guessIndex] >= firstWord) {
    // go right
    floorIndex = guessIndex;
  } else {
    // go left
    ceilingIndex = guessIndex;
  }

  // if floor and ceiling have converged
  if (floorIndex + 1 === ceilingIndex) {

    // between floor and ceiling is where we flipped to the beginning
    // so ceiling is alphabetically first
    break;
  }
}

return ceilingIndex;