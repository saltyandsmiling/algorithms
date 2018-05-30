const string = 'ivicc';

function palin(str) {
  // validate that input is a string
  const tracker = {};
  for (let i = 0; i < str.length; i += 1) {
    tracker[str[i]] ? delete tracker[str[i]] : tracker[str[i]] = true;
  }

  return Object.keys(tracker).length <= 1;
}

console.log(palin(string))
