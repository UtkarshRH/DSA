/**
 * Problem: Two Sum
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers 
 * such that they add up to target.
 *
 * Rules:
 * - Each input will have exactly one solution.
 * - You cannot use the same element twice.
 * - Return the indices in any order.
 *
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]  (because nums[0] + nums[1] = 9)
 */


/* -------------------------------
   1. Brute Force Approach
   -------------------------------
   - Check all pairs using two loops.
   - Return the pair of indices if they sum to target.
   - Time Complexity: O(n^2)
   - Space Complexity: O(1)
*/
var twoSumBruteForce = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]; // found the pair
            }
        }
    }
    return []; // not expected (since solution is guaranteed)
};


/* -------------------------------
   2. Optimized Approach (Hash Map)
   -------------------------------
   - Use a Map to store previously seen numbers and their indices.
   - For each number:
       * Calculate complement = target - num
       * If complement is already in the map, return [map.get(complement), i]
       * Otherwise, store the number in the map
   - Time Complexity: O(n)
   - Space Complexity: O(n)
*/
var twoSumOptimized = function(nums, target) {
    const map = new Map(); // number → index
    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (map.has(comp)) {
            return [map.get(comp), i]; // found the pair
        }
        map.set(nums[i], i); // store current number with index
    }
    return []; // not expected (since solution is guaranteed)
};


/* -------------------------------
   Example Runs
   ------------------------------- */
console.log(twoSumBruteForce([2,7,11,15], 9)); // [0,1]
console.log(twoSumOptimized([2,7,11,15], 9));  // [0,1]

console.log(twoSumBruteForce([3,2,4], 6));     // [1,2]
console.log(twoSumOptimized([3,2,4], 6));      // [1,2]
