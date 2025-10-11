/*
📘 LeetCode 15. 3Sum

🧩 Question:
Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]] 
such that:
   - i != j, i != k, and j != k
   - nums[i] + nums[j] + nums[k] == 0

The solution set must not contain duplicate triplets.

Example:
Input: [-1, 0, 1, 2, -1, -4]
Output: [[-1, -1, 2], [-1, 0, 1]]
*/


/*====================== BRUTE-FORCE APPROACH (Using Set) ======================*/

/**
 * Brute-force approach: Check all possible triplets using 3 nested loops.
 * Use a Set to avoid duplicate triplets.
 * Time Complexity: O(n^3)
 * Space Complexity: O(m) → number of unique triplets
 */
var threeSumBruteForce = function(nums) {
    const result = new Set();
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    // Sort triplet so duplicates are consistent
                    const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    result.add(triplet.toString());
                }
            }
        }
    }

    // Convert Set of strings back to array of numbers
    return Array.from(result).map(str => str.split(',').map(Number));
};


/*====================== OPTIMIZED APPROACH (Two-Pointer) ======================*/

/**
 * Optimized approach: Sort the array + use two pointers to find triplets.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) (excluding output)
 */
var threeSumOptimized = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort the array first

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break; // Early stopping: sum cannot be 0 beyond this
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate i

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for left and right pointers
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++; // Need a larger sum
            } else {
                right--; // Need a smaller sum
            }
        }
    }

    return result;
};


/*====================== EXAMPLES ======================*/

const nums = [-1, 0, 1, 2, -1, -4];

console.log("Brute-force Output:", threeSumBruteForce(nums));
// Output: [[-1, -1, 2], [-1, 0, 1]]

console.log("Optimized Output:", threeSumOptimized(nums));
// Output: [[-1, -1, 2], [-1, 0, 1]]
