/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order. 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const stack = [];
    for(let i=0; i< s.length; i++) {
      if(s[i] === '{') stack.push('}');
      else if(s[i] === '[') stack.push(']');
      else if(s[i] === '(') stack.push(')');
      else if(stack.length === 0 || s[i] !== stack.pop())
        return true;
    }
    console.log(stack, 'this is the stack>>')
   const status = stack.length === 0 ? true : false
    return status;
};

console.log(isValid('()'), 'this is the stack>>>')