function binarySearch(arr, val) {
  // assuming that arr is a sorted array
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let crt = arr[mid];

    if (crt < val) {
      min = mid + 1;
    } else if (crt > val) {
      max = mid + 1;
    } else {
      return mid;
    }
  }

  // no val was found in arr
  return -1;
}

console.log(binarySearch([1, 3, 6, 9, 11, 32, 56, 87], 56));
