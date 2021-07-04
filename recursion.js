/*
  Where can factorials go wrong:
    1 - No base case.
    2 - Forgetting to return or returning the wrong thing.
    3 - Avoid stack overflow at all costs.
*/

// factorial is a good function to apply recursion
function factorial(num) {
  // look out for edge cases
  if (num < 0) {
    console.log('Non-negative numbers only!');
    return false;
  }
  // base logic that stops recursion
  if (num === 1 || num === 0) return 1;
  // logic to start recursion
  return num * factorial(num - 1);
}

console.log(factorial(10));

// function sumRange(num) {
//   // base case (responsible for stopping the recursion)
//   if (num === 1) return 1;

//   // calling the same function with different logic to create recursion
//   return num + sumRange(num - 1);
// }

// console.log(sumRange(3));

// recursion example count down to zero
// function countDown(num) {
//   if (num <= 0) {
//     console.log('All done');
//     return;
//   }

//   console.log(num);
//   num--;
//   countDown(num);
// }

// console.log('countDown', countDown(10));
