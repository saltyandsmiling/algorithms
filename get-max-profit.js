const stocks = [10, 7, 5, 8, 11, 9];

/*
using a greedy algorithm i can do this in O(n)
i need to keep track of the best possible profit at any time
i need to track the lowest low and compare that against the each element
to see if we have a new max profit
 */

function getMaxProfit(stocks) {
  let i;
  const length = stocks.length;
  let maxProfit = stocks[0] - stocks[1];
  let currentLow = stocks[0];

  for (i = 1; i < length; i++) {
    currentLow = Math.min(currentLow, stocks[i])
    maxProfit = Math.max(maxProfit, stocks[i] - currentLow)
  }
  console.log(maxProfit)
}

getMaxProfit(stocks);