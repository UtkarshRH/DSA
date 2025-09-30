/*
Question:
Given an array nums of distinct integers, return all the possible permutations. 
You can return the answer in any order.

Example:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

function permute(nums) {
    let results = [];

    // backtrack function to build permutations
    function backtrack(path, used) {
        // Base case: if path length equals nums length → complete permutation
        if (path.length === nums.length) {
            results.push([...path]); // push a copy
            return;
        }

        // Try each number
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue; // skip if already used

            // Choose
            path.push(nums[i]);
            used[i] = true;

            // Explore
            backtrack(path, used);

            // Unchoose (backtrack)
            path.pop();
            used[i] = false;
        }
    }

    backtrack([], Array(nums.length).fill(false));
    return results;
}

// Example run
console.log(permute([1, 2, 3]));
