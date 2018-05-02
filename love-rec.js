const recOne = {
  leftX: 1,
  bottomY: 1,

  width: 6,
  height: 3
};

const recTwo = {
  leftX: 7,
  bottomY: 4,

  width: 3,
  height: 6
};

function loveRec(recOne, recTwo) {
  const answer = { leftX: null, bottomY: null, width: null, height: null };

  answer.leftX = Math.max(recOne.leftX, recTwo.leftX);
  answer.bottomY = Math.max(recOne.bottomY, recTwo.bottomY);
  answer.width =  Math.min(recOne.leftX + recOne.width, recTwo.leftX + recTwo.width) - answer.leftX;
  answer.height = Math.min(recOne.bottomY + recOne.height, recTwo.bottomY + recTwo.height) - answer.bottomY;

  if (answer.height <= 0 || answer.width <= 0) {
    console.log('no cross')
  } else {
    console.log('Success', answer)
  }

}

loveRec(recOne, recTwo);

