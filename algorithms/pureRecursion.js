/*
  Pure recursion is a simpler way of doing recursion with
  complex logic.
*/

// example of pure recursion
function collectOdds(nums) {
  let newArr = [];

  // edge cases first
  if (nums.length === 0) return [];

  // base case
  if (nums[0] % 2 !== 0) {
    newArr.push(nums[0]);
  }

  // cause the recursion with the new set of arguments
  newArr = newArr.concat(collectOdds(nums.slice(1)));
  // return the results
  return newArr;
}

console.log(collectOdds([1, 3, 6, 88, 99, 103]));
// console.log(collectOdds([-2, -13, -57]));
// console.log(collectOdds([]));
