const deliveryConfirmations = [1, 2, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 6, 7, 8, 9, 9];

function findUniqueInt(deliveryInts) {
  const uniqueObjTracker = {};
  deliveryInts.forEach(el => {
    if (!uniqueObjTracker[el]) uniqueObjTracker[el] = true;
    else delete uniqueObjTracker[el];
  });

  console.log(uniqueObjTracker)
}

findUniqueInt(deliveryConfirmations);