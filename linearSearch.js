/*
  - Write a function that accepts and array and a value
  - Loop through the array and check if the current array element is equal to the value
  - If it is, returh the index at which the element is found
  - If the value is never found, return -1
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

console.log(linearSearch([4, 9, 2, 1, 5, 0], 5));
