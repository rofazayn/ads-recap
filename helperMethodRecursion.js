/* General syntax of helper method recursion functions
  function outer() {
    var outerScopedVariable = [];

    function helper(helperInput) {
      // alter the outerScopedVariable from here
      outerScopedVariable.push(helperInput);
      // start the recursion
      helper(helperInput--);
    }

    // call the helper function
    helper(input);

    // return the altered outerScopedVariable
    return outerScopedVariable;
  }
*/

// example of helper method recursion
function collectOdds(arr) {
  let odds = [];

  function collector(nums) {
    // edge cases first
    if (nums.length === 0) return;
    // check if first number in array is odd if yes add it to the outer variable
    if (nums[0] % 2 !== 0) {
      odds.push(nums[0]);
    }
    // now cause the recursion to go through every number in the array
    // by slicing out the first number that had already been checked
    collector(nums.slice(1));
  }

  // call the recursion function
  collector(arr);

  // return the result
  return odds;
}

// console.log(collectOdds([1, 4, 653, 123, 22, 65, 34, 867]));
console.log(collectOdds([1, 2, 3, -123]));
// console.log(collectOdds([]));
