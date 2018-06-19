const amount = 4;
const denom = [1, 2, 3];

function coinPerm(amount, denom) {
  //const possibleCombos = new Array(amount).fill(0);
  for (let i = 1; i < 5; i++) {
    setTimeout(function() { console.log(i) }, 1000);
  }
}

coinPerm(amount, denom);