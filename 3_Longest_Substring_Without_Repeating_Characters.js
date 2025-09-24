/**
 * Question:
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Example:
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", which has a length of 3.
 *
 * Approach (Sliding Window):
 * - We maintain a window [left, right] that contains no duplicate characters.
 * - Use a Set to keep track of characters in the current window.
 * - Move the right pointer to expand the window:
 *    - If s[right] is already in the Set (duplicate found), shrink the window 
 *      by moving left pointer until the duplicate is removed.
 * - At each step, calculate the length of the current valid window: (right - left + 1).
 * - Keep track of the maximum length found.
 *
 * Time Complexity: O(n)
 * - Each character is added to the Set once and removed at most once.
 * - Hence both pointers move at most n steps.
 *
 * Space Complexity: O(n)
 * - In the worst case (all unique characters), the Set stores up to n characters.
 */

var lengthOfLongestSubstring = function(s) {
    let set = new Set();     // To store characters in current substring
    let left = 0;            // Left pointer of the window
    let maxLen = 0;          // Result variable for max length

    for (let right = 0; right < s.length; right++) {
        // If current char is duplicate, shrink window from left
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        // Add current character to the Set
        set.add(s[right]);

        // Update maximum length of valid substring
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};

// Test Cases
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // 3 ("wke")
console.log(lengthOfLongestSubstring(""));         // 0
console.log(lengthOfLongestSubstring("au"));       // 2 ("au")
