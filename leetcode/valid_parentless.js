var isValid = function (s) {
  const mapping = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  let stack = [];

  for (let char of s) {
    if (char in mapping) {
      let top = stack.length === 0 ? "#" : stack.pop();
      if (mapping[char] != top) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
