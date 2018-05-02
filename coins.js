const amount = 4;
const denom = [1, 2, 3];

function coinPerm(amount, denom) {

  const possibleCombos = []
  for (let i = 0; i <= amount; i++) {
    possibleCombos.push(0)
  }

  possibleCombos[0] = 1;

  denom.forEach(coin => {
    for (let higherAmount = coin; higherAmount < possibleCombos.length; higherAmount++) {
      const remainder = higherAmount - coin;
      possibleCombos[higherAmount] += possibleCombos[remainder];
    }
  });

  console.log(possibleCombos)

}

coinPerm(amount, denom);