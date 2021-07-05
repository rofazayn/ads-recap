/*
  Binary search (faster search algorithm):
  - Eliminates half of the array everytime.
  - Array has to be sorted (numerically, alphabetically).
  - Uses the Divide & Conquer pattern.

  Pseudocode:
  - Write a function that accepts a sorted array and a value.
  - Create a left pointer at the start of the array and a right one at the end.
  - While the left pointer comes before the right pointer:
    - Create a pointer in the middle.
    - If you find the value you want return its index.
    - If the value is too small, move the left pointer up the array.
    - If the value is too large, move the right pointer down the array.
  - If you never find the value, return -1.
*/

function binarySearch() {}

// function binarySearch(arr, val) {
//   // assuming that arr is a sorted array
//   let min = 0;
//   let max = arr.length - 1;

//   while (min <= max) {
//     let mid = Math.floor((min + max) / 2);
//     let crt = arr[mid];

//     if (crt < val) {
//       min = mid + 1;
//     } else if (crt > val) {
//       max = mid + 1;
//     } else {
//       return mid;
//     }
//   }

//   // no val was found in arr
//   return -1;
// }

console.log(binarySearch([1, 3, 6, 9, 11, 32, 56, 87], 56));
