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
  return parseInt(String(n).split('').sort().reverse().join(''));
}

descendingOrder(123456789);


/*
Create a function that takes a number and returns an array of strings containing
the number cut off at each digit.
Example: 420 should return ["4", "42", "420"]
*/
function createArrayOfTiers(num) {
  console.log(Array.from(
    num.toString(),  // take iterables
    (s => v => s += v)('')  // map value of array with the previous elements
  ));
}

createArrayOfTiers(420);


// Given a string of space separated numbers, return the highest and lowest number.
function highAndLow(numbers){
  numbers = numbers.split(" ");
  return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers);
}

highAndLow("1 2 3 4 5");  // return "5 1"
