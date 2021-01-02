/*
Usually when you buy something, you're asked whether your credit card number,
phone number or answer to your most secret question is still correct.
However, since someone could look over your shoulder, you don't want that shown
on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four
characters into '#'.
*/
// return masked string
function maskify(cc) {
  let str = cc.toString();
  let lastChar = str.slice(-1);
  let secLastChar = str.slice(-2);
  let thirLastChar = str.slice(-3);
  let fourLastChar = str.slice(-4);
}

maskify(123456789);


/*
Your task is to make a function that can take any non-negative integer as an
argument and return it with its digits in descending order.
Essentially, rearrange the digits to create the highest possible number.
*/
function descendingOrder(n){
  // will produce an array of strings, not digits
  let digits = (""+n).split("");
  console.log(digits);  // ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let descStr = digits.sort().reverse();
  console.log(descStr);  // ["9", "8", "7", "6", "5", "4", "3", "2", "1"]
  for (var i = 0; i < descStr.length; i++) {
    parseInt([i]);
  }
  console.log(descStr);  // 9
  return descStr;  // returns 1 instead of 111, 5 instead of 51, 2 instead of 2110
}

descendingOrder(123456789);
