// Reverse a String  (ex: hello -->  olleh)

function reverseString(str) {
  return str.split("").reverse().join("");
}

const revStr = reverseString("hello");
console.log(revStr);
