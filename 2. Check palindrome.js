// Check palindrome ex : (madam,civic,rotor,noon)

function isPalindrome(str) {
  const revStr = str.split("").reverse().join("");
  for (let i = 0; i <= revStr.length; i++) {
    if (str[i] !== revStr[i]) return false;
  }

  return true;
}

console.log(isPalindrome("rotor"));
