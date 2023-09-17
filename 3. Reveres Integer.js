// Reverse Integer (521 === 125)

function reverseInt(num) {
  let revNum = num.toString().split("").reverse().join("");
  return parseInt(revNum) * Math.sign(num); // this function will add the integer in negative values
}

console.log(reverseInt(521) === 125);
console.log(reverseInt(-12345) === -54321);
