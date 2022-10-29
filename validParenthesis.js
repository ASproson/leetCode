const validParenthesis = (s, stack = []) => {
  const bracketHashMap = { ")": "(", "]": "[", "}": "{" };

  for (const char of s) {
    // console.log(stack)

    // Test if value associated with current key is a key-value pair, true if so; else false
    const isClosingBracket = char in bracketHashMap;

    // If this is not a closing bracket, add it to the stack to test below
    if (!isClosingBracket) {
      stack.push(char);
      continue;
    }

    // If the current iterator (char) can successfully close the open bracket at the top of the stack, remove it
    const canCloseCurrentBracket = stack[stack.length - 1] === bracketHashMap[char];
    if (canCloseCurrentBracket) {
      stack.pop();
      continue;
    }

    // If the current iterator is not a matching closing bracket type with the top of the stack, break and return false
    return false;
  }

  // If stack has been successfully fully popped, return true, else false
  return stack.length === 0;
};

console.log(validParenthesis("[]")); // true
console.log(validParenthesis("[{}]")); // true
console.log(validParenthesis("[{]}")); // false
console.log(validParenthesis("[[[[]]]]")); // true
console.log(validParenthesis("[]{}()")); // true


