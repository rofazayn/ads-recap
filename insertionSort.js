/*
  Insertion Sort

  Pseudocode:
  - Start by picking the second element in an array.
  - Now compare the second element with the one before it and swap if necessary.
  - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
  - Repeat until the array is sorted.
*/

function insertionSort(arr) {
  // first we handle edge cases
  if (arr.length === 0) throw new Error('Enter valid array');
  if (arr.length === 1) return arr;

  // we loop through the array starting from second item
  for (let i = 1; i < arr.length; i++) {
    // we pick the current i item as the current value
    let currentVal = arr[i];
    // we need a higher scoped j iterator
    let j;
    // compare current value with the one before it
    // and swap if necessary
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // j iteration here serves as the left sorted part
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  // return the sorted arr
  return arr;
}

// best case scenario: O(n)
// worst case scenario: O(n^2)
// average case scenario: O(n^2)

// console.log(insertionSort([]));
// console.log(insertionSort([1, 15, 767, 23, 3, 5, 25, 237]));
console.log(insertionSort([767, 23, 3, 5, 25, 237]));
