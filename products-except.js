const ints =   [1, 7, 3, 4];

/*
initialize a result array
walk through the input array fowards multiplying everything by waht's in front of it and do the same in reverse.
 */

function productsExcept(ints) {
  let i, j;
  const inputLength = ints.length;
  const result = []
  let prod = 1;

  for (i = 0; i < inputLength; i++) {
    result[i] = prod;
    prod *= ints[i]
  }

  prod = 1;
  for (j = inputLength - 1; j >= 0; j--) {
    result[j] *= prod;
    prod *= ints[j];
  }

  console.log(result);

}

productsExcept(ints);
