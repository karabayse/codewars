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


// Compare strings anagram
function solution(a, b) {
  // split into an array of substrings
  // sort alphabetically
  // join returns the array as a string
  let x = a.split("").sort().join("");
  console.log(x);  // aehrrt
  let y = b.split("").sort().join("");
  console.log(y);  // adehrr
    console.log(x === y
        ? a + " and " + b + " are anagrams!"
        : a + " and " + b + " are not anagrams."
    );
}

solution("rather", "harder");


function solution2(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counter = 0;
    let x = A.split("").sort();
    let y = B.split("").sort();

    x.forEach((n1, index) => {
        const n2 = y[index];
        if (n1 !== n2) {
          counter++;
        }
    });
  console.log(counter);
}

solution2("rather", "harder")  // ->  2


// Check whether a non-empty array A of N integers (sorted in non-decreasing order)
// and integer K, checks whether A contains every number from 1 to K at least once
// and no other numbers
function fixBug(a, k) {
  for (var i = 0; i <= a.length; i++) {
    if (a[i] + 1 < a[i + 1]) {
      console.log("false");
    }
    if (a[0] != 1 && a[n - 1] != k) {
      console.log("false");
    } else {
      console.log("true");
    }
  }
}

fixBug([1, 1, 2, 3, 3]);  // true
fixBug([1, 1, 3]);  // false

for (var i = 0; i < array.length; i++) {
  array[i]
}


/*
Write a function that takes an integer as input,
and returns the number of bits
that are equal to one in the binary representation of that number.
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function
should return 5 in this case
*/
let countBits = function(n) {
  return (n >>> 0).toString(2);
};
