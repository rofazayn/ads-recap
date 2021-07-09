/*
  Selection sort
  - Selection sort is similiar to bubble sort, except it's looking for the smallest value first.
  - Potentially better if less swaps are needed to sort the array.

  Pseudocode:
  - Store the first item value as the minimum.
  - Compare this item to the next items in the array until you find another minimum.
  - If you find a smaller number, designate that smaller number to be the new min.
  - If the minimum's index is not the value's index you began with, swap the two values.
  - Repeat this with the next element until the array is sorted.
*/

function selectionSort(arr) {
  // edge cases
  if (arr.length === 0) throw new Error('Enter valid array');
  if (arr.length === 1) return arr;

  // loop through items
  for (let i = 0; i < arr.length; i++) {
    // set first item index as minimum
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      // check if next items are smaller than minimum
      if (arr[min] > arr[j]) {
        // if smaller value was found make its index the new minimum
        min = j;
      }
    }
    // do the swap
    if (min !== i) {
      // shift the new minimum value to the start of the collection
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  // return the sorted array
  return arr;
}

// best case scenario: O(n^2)
// worst case scenario: O(n^2)
// average case scenario: O(n^2)

// console.log(selectionSort([]));
// console.log(selectionSort([1, 15, 767, 23, 3, 5, 25, 237]));
console.log(selectionSort([767, 23, 3, 5, 25, 237]));
