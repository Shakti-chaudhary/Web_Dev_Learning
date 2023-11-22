function likes(names) {
  let numLikes = names.length;

  if (numLikes === 0) return "no one likes this";
  else if (numLikes === 1) return `${names[0]} likes this`;
  else if (numLikes === 2) return `${names[0]} and ${names[1]} like this`;
  else if (numLikes === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  else if (numLikes >= 4)
    return `${names[0]}, ${names[1]} and ${numLikes - 2} others like this`;
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
