const input = '';
//output: true
const input1 = '(((((((((((((((((([[[[[[[{{{{{{{{}}}}}}}}]]]]]]]))))))))))))))))))(((((((((((((((((([[[[[[[{{{{{{{{}}}}}}}}]]]]]]]))))))))))))))))))';
//output false
const isOpen = character => {
  return ['(', '{', '['].includes(character);
}

const match = (top, character) => {
  const pairs = { '(': ')', '[': ']', '{': '}' };
  return pairs[top] === character;
}

const validate = parenthesis => {
  const stack = [];
  for (character of parenthesis) {
    if (isOpen(character)) {
      stack.push(character);
    } else {
      const top = stack.pop();
      if (!match(top, character)) {
        return `Invalid Parenthesis: ${parenthesis}`;
      }
    }
  }
  return `OK: ${parenthesis}`;
}

console.log(validate(input));
console.log(validate(input1));