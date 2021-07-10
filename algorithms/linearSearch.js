/*
  Linear Search (most common search algorithm):
  - Eliminates one item at a time (you have to loop throughout every single item).
  - Array can be whatever.
  - Really bad for large data chunks.

  Pseudocode:
  - Write a function that accepts and array and a value.
  - Loop through the array and check if the current array element is equal to the value.
  - If it is, returh the index at which the element is found.
  - If the value is never found, return -1.
*/

function linearSearch(arr, val) {
  // loop through array and check
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      // return the index if val found in arr
      return i;
    }
  }
  // return -1 if val is never found
  return -1;
}

// best case scenario: O(1)
// worst case scenario: O(n)
// average case scenario: O(n)

console.log(linearSearch([4, 9, 2, 1, 5, 0], 5));
