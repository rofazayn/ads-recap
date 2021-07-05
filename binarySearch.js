/*
  Binary Search (faster search algorithm):
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

function binarySearch(sortedArray, val) {
  // array must be sorted for this to work
  // min will be the left pointer index
  let min = 0;
  // max will be the right pointer index
  // indexes are zero-based, that's why we substract 1
  let max = sortedArray.length - 1;
  // we decide the middle of the array on each loop
  // we round down the number because the length of the array can be an even number.
  // and an even number divided by two give us a float.
  let middle = Math.floor((min + max) / 2);

  // we use while to loop through the array
  while (sortedArray[middle] !== val && min <= max) {
    if (val < sortedArray[middle]) {
      // if the searched value is too small move the right pointer to the left
      max = middle - 1;
    } else if (val > sortedArray[middle]) {
      // if the searched value is too large move the left pointer to the right
      min = middle + 1;
    }
    // reset the middle
    middle = Math.floor((min + max) / 2);
  }

  if (sortedArray[middle] === val) {
    // if the array's middle is the value then return it
    // otherwise, just loop again with new min or max and middle
    return middle;
  }
  // if no value was found
  return -1;
}

// best case scenario: O(1)
// worst case scenario: O(log(n))
// average case scenario: O(log(n))

console.log(binarySearch([1, 3, 6, 9, 11, 32, 56, 87], 9));
