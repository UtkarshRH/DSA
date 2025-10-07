/*
💡 Question:
Given an array `nums` containing n distinct numbers in the range [0, n],
return the only number in the range that is missing from the array.

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation:
n = 3 → numbers should be [0,1,2,3]
The number 2 is missing.

Example 2:
Input: nums = [0,1]
Output: 2
Explanation:
n = 2 → numbers should be [0,1,2]
The number 2 is missing.

Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation:
n = 9 → numbers should be [0,1,2,3,4,5,6,7,8,9]
The number 8 is missing.

⚙️ Constraints:
- n == nums.length
- 1 <= n <= 10^4
- 0 <= nums[i] <= n
- All numbers are unique

Goal:
Find the missing number using O(n) time and O(1) space.
*/


/* ✅ Solution 1: Using Sum Formula
------------------------------------------------
👉 Logic:
The sum of first n natural numbers = n*(n+1)/2
If we subtract the actual sum of nums from this expected sum,
we get the missing number.

🕒 Time Complexity: O(n)
💾 Space Complexity: O(1)
*/
var missingNumber = function(nums) {
    // Step 1: Find the length of the array
    const n = nums.length;

    // Step 2: Calculate expected sum of numbers from 0 to n
    const expectedSum = (n * (n + 1)) / 2;

    // Step 3: Calculate actual sum of elements in nums
    const actualSum = nums.reduce((acc, num) => acc + num, 0);

    // Step 4: The difference gives the missing number
    return expectedSum - actualSum;
};


// ✅ Example Runs
console.log(missingNumber([3,0,1]));              // Output: 2
console.log(missingNumber([0,1]));                // Output: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));  // Output: 8
