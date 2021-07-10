// the count charachter in a string

function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    /[a-z0-9]/.test(char) && (obj[char] = ++obj[char] || 1);
  }
  return obj;
}

console.log(charCount('This is something else entirely!!!??'));
