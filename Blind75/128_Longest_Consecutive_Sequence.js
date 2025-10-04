/**
 * Problem: Longest Consecutive Sequence
 * Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
 * The solution should run in O(n) time.
 * 
 * Example:
 * Input: [100, 4, 200, 1, 3, 2]
 * Output: 4
 * Explanation: The longest consecutive sequence is [1, 2, 3, 4].
 */

var longestConsecutive = function(nums) {
    // Step 1: Convert the array to a Set for O(1) lookups
    let set = new Set(nums);
    let longest = 0;

    // Step 2: Loop through each number in the set
    for (const num of set) {
        // Step 3: Only start counting from the beginning of a sequence
        // If num-1 is not in the set, then num is the start of a sequence
        if (!set.has(num - 1)) {
            let curNum = num;
            let length = 1;

            // Step 4: Count consecutive numbers starting from curNum
            while (set.has(curNum + 1)) {
                curNum += 1;
                length += 1;
            }

            // Step 5: Update the maximum length found so far
            longest = Math.max(longest, length);
        }
    }

    // Step 6: Return the length of the longest consecutive sequence
    return longest;
};

// Example usage:
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4