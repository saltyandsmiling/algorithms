// Write a function that takes two arguments 'text' and
// 'exclude' and returns and array with the most frequently
// used word (or words in the case of a tie).'text' is a string
// and 'exclude' is an arrayof unique strings that should not
// be included in the result. Words connected with punctuation
//   should be considered as two words.
//   they're -> they re
// Example:

const text = "The cat was a fat cat. The fat cat sat on a mat."
const exclude = ['the', 'cat']
// const output = ['fat', 'a']


function mostFrequentWord(txt, excl) {
  const wordCount = {};
  const textArrByWord = text.split(' ');
  textArrByWord.forEach((word) => {
    const includes = excl.includes(word);
    if (!wordCount[word] && !includes) wordCount[word] = 1;
    else if (!includes) wordCount[word] += 1;
  });
  console.log(wordCount);
}

mostFrequentWord(text, exclude)
