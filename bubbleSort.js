/*
  Bubble Sort
  - Compare every adjacent items in a collection.
  - Decide to swap items or not after comparing.
  - Repeat the process for as many as needed iterations.
  - Bubble sort is not really that efficient but it's good to know it.
  - Use buble sort when your data is nearly sorted it works better in this case.

  What is sorting?
  Sorting is the process of rearranging the items in a collection
  so that the items are in some kind of order.

  Pseudocode:
  - Start looping from the end towards the beginning of a collection with a variable called i.
  - Start an inner loop with a variable called j from the beginning until i - 1.
  - If arr[j] is greater than arr[j + 1], swao those two values.
  - Return the sorted array.
*/

function bubbleSort(arr) {
  // check if the array has any items in it
  if (arr.length === 0) throw new Error('Array cannot be empty!');

  // use a variable that breaks the loop when the array is already sorted
  // we can do that by checking if the inner loop did make a swap or not
  // we can use the noSwaps variable to optimise the algorithms and skip uneeded iterations
  let noSwaps;
  // loop from the end to the beginning of the array
  for (let i = arr.length; i > 0; i--) {
    // assuming that no swaps will be made we st noSwaps to true
    noSwaps = true;
    // check the item next to the current item using another loop
    for (let j = 0; j < i - 1; j++) {
      // use this console log to track the progress of the alg
      console.log(arr, arr[j], arr[j + 1]);
      // if the current item is bigger than the next item then swap them
      if (arr[j] > arr[j + 1]) {
        // use a temporary variable to hold the value of first item
        let temp = arr[j];
        // swap the items using temp variable
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // if a swap is made set noSwap to false to avoid breaking up the loop
        noSwaps = false;
      }
    }
    // break out of the loop if noSwaps were made
    // that means the array is already sorted
    if (noSwaps) break;
  }

  // don't forget to return the sorted array
  return arr;
}

// best case scenario: O(n)
// worst case scenario: O(log(n^2))
// average case scenario: O(log(n^2))

// console.log(bubbleSort([]));
// console.log(bubbleSort([1, 15, 767, 23, 3, 5, 25, 237]));
console.log(bubbleSort([767, 23, 3, 5, 25, 237]));
