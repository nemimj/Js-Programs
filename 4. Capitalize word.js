//  i love javascript -> I Love Javascript

function capitalize(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
}

console.log(capitalize("i love javascript"));
