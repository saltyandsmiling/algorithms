const cakeTypes = [
  {weight: 7, value: 160},
  {weight: 3, value: 90},
  {weight: 2, value: 15},
];

const capacity = 20;

/*
The cake with the highest value per pound should be put into the bag the most
we build to that number by running addition up to the point that it doesn't fit anymore
 */

function napsack(cakeTypes, capacity) {
  // if (cakeTypes.length > 0 || capacity < 1) throw new Error('Invalid inputs');

  let remainderCapacity = 0;
  let maxWeight = 0;

  cakeTypes.forEach(cake => {
    //determines whether a high value/cake is available
    const timesCakeFits = Math.floor(capacity / cake.weight);
    const maxCakeWeight = timesCakeFits * cake.value;

    if (maxCakeWeight > maxWeight) {
      maxWeight = maxCakeWeight;
      remainderCapacity = capacity - (timesCakeFits * cake.weight);
    } else if (cake.weight <=)
  });

  console.log(remainderCapacity, maxWeight)

}

console.log(napsack(cakeTypes, capacity));
// returns 555 (6 of the middle type of cake and 1 of the last type of cake)
