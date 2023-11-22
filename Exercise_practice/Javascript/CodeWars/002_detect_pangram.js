function isPangram(string) {
  let charSet = new Set();

  for (let char of string.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      charSet.add(char);
    }
  }

  return charSet.size === 26;
}

var string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string));

var string2 = "This is not a pangram.";
console.log(isPangram(string2));
