/**
 * Question:
 * Given an integer array nums, return true if any value appears at least twice 
 * in the array, and return false if every element is distinct.
 *
 * Example:
 * Input: [1,2,3,1]
 * Output: true
 *
 * Approach:
 * - Use a Set to keep track of seen numbers.
 * - Iterate through nums:
 *    - If number already exists in Set → return true (duplicate found).
 *    - Else, add number to Set.
 * - If loop ends without duplicates → return false.
 *
 * Time Complexity: O(n) → we traverse the array once.
 * Space Complexity: O(n) → in worst case, all numbers are unique and stored in the Set.
 */

var containsDuplicate = function(nums) {
    let seen = new Set(); // stores unique numbers

    for (let num of nums) {
        if (seen.has(num)) { // if already seen, duplicate found
            return true;
        }
        seen.add(num); // otherwise, add it to the set
    }

    return false; // no duplicates found
};

// Test Cases
console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true
console.log(containsDuplicate([])); // false
console.log(containsDuplicate([99])); // false
