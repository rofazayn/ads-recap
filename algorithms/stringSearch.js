/*
  Naive String Search (Doesn't really mean anything)
  - Loop through array and check character per character.
  - When matches are found increase a counter.

  Pseudocode:
  - Loop over the longer string.
  - Loop over the shorter string.
  - If the characters dont't match, break out of the inner loop.
  - If the characters do match, keep going.
  - If you complete the inner loop and find a match, increment the count of matches.
  - Return the count.
*/

function stringSearch(longStr, shortStr) {
  // check for edge cases first
  if (longStr.length === 0 || shortStr.length === 0)
    throw new Error('Enter valid strings');

  // Initialize a count variable
  let count = 0;

  // loop through the longer string
  for (let i = 0; i < longStr.length; i++) {
    // try to loop through short string atleast once for every letter of the longer string
    for (let j = 0; j < shortStr.length; j++) {
      // if a match wasn't found break the loop on the short string
      if (shortStr[j] !== longStr[i + j]) break;
      // if the loop doesn't break on previous line that
      // means third letter on short string was found
      // so we check if j is equal to the length of
      // the short string and increase counter
      if (j === shortStr.length - 1) count++;
    }
  }

  // at last we return the count variable
  return count;
}

// best case scenario: O(n^2)
// worst case scenario: O(n^2)
// average case scenario: O(n^2)

console.log(stringSearch('bagohaablawhoablahwesbla', 'bla'));
