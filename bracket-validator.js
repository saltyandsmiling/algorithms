function validator(string) {
  const stringSplit = string.split('');
  const stack = [];

  for (let i = 0; i < stringSplit.length; i += 1) {
    const lastStackItem = stack[stack.length - 1];

    if (stringSplit[i] === ']' && lastStackItem === '[') stack.pop();
    else if (stringSplit[i] === '}' && lastStackItem === '{') stack.pop();
    else if (stringSplit[i] === ')' && lastStackItem === '(') stack.pop();
    else stack.push(stringSplit[i]);
  }
  return !stack.length;
}

console.log(validator('{[]()}'));
