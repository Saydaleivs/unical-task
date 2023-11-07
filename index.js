const parenthesisValitation = (str) => {
  const parenthesis = {
    openings: {
      "(": 1,
      "[": 2,
      "{": 3,
    },
    closings: {
      ")": 1,
      "]": 2,
      "}": 3,
    },
  }

  const stack = [] // we need to use stack data structure to store opening parenthesis
  const isEmpty = () => {
    return !stack.length ? false : true
  }

  for (let i = 0; i < str.length; i++) {
    const curr = str[i]

    // if our current index is equal to opening parenthesis then push it into stack
    if (parenthesis.openings[curr]) {
      stack.push(curr)
    } else {
      // if our current index is equal to closing parenthesis
      // we gotta check our stack, if its empty return false, cuz there is no char to compare
      isEmpty()

      // if not empty, compare current closing char with last pushed opening char
      const top = stack[stack.length - 1]
      if (parenthesis.openings[top] !== parenthesis.closings[curr]) {
        return false
      }

      // if its valid opening and closing then remove last inserted char from stack
      stack.pop()
    }
  }

  // last step, return true only when you don't have anything in stack, otherwise false
  return !isEmpty()
}

console.log(parenthesisValitation("()")) // true
console.log(parenthesisValitation("()[]{}")) // true
console.log(parenthesisValitation("(]")) // false
