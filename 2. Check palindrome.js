// Check palindrome ex : (madam,civic,rotor,noon)

function isPalindrome(str) {
  const revStr = str.split("").reverse().join("");
  return revStr === str;
}

console.log(isPalindrome("rotor"));
