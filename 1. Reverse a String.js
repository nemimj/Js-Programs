// Reverse a String  (ex: hello -->  olleh)

function reverseString(str) {
  //   return str.split("").reverse().join("");

  return str.split("").reduce((revString, char) => {
    char + revString;
  }, "");
}

const revStr = reverseString("hello");
console.log(revStr);
