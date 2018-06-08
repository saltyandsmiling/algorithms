const inputString = 'We came, we saw, we conquered...then we ate Bill\'s (Mille-Feuille) cake.';

function buildMap(string) {
  const map = {}
  const strArr = string.replace(/[.,#!$%^&*;:{}=\-_`~()]/g, '').split(' ');
  for (let i = 0; i < strArr.length; i += 1) {
    const word = strArr[i].toLowerCase();
    !map[word] ? map[word] = 1 : map[word] += 1;
  }

  console.log(map)

}

buildMap(inputString);
