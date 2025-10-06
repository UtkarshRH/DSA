/*
🧩 Problem: Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab" 
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    // Base case: if string length is 0 or 1, it's already a palindrome
    if (s.length < 2) return s;

    // Variables to store start and end indices of the longest palindrome found
    let start = 0, end = 0;

    // Helper function to expand around the given center
    function expandAroundCenter(left, right) {
        // Expand while characters match and indices are valid
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Return the length of the palindrome found
        // (We subtract 1 because after breaking, left and right moved one step extra)
        return right - left - 1;
    }

    // Iterate through every character as potential center
    for (let i = 0; i < s.length; i++) {

        // Case 1: Odd-length palindrome (single center)
        let len1 = expandAroundCenter(i, i);

        // Case 2: Even-length palindrome (double center)
        let len2 = expandAroundCenter(i, i + 1);

        // Take the longer palindrome length
        let len = Math.max(len1, len2);

        // If the current palindrome is longer than previous one, update indices
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    // Return the substring using start and end indices
    return s.substring(start, end + 1);
};

/*
🧠 Explanation:

1️⃣ For each character in the string, we consider it as a center.
2️⃣ We expand around this center in both directions as long as characters on both sides match.
3️⃣ We handle both odd (center at one char) and even (center between two chars) length cases.
4️⃣ We keep track of the longest palindrome by storing its start and end indices.
5️⃣ Finally, we return the substring from start to end.

🕒 Time Complexity: O(n²)
   - For each of the n characters, we expand around it (up to n in the worst case).

💾 Space Complexity: O(1)
   - We use only a few extra variables (constant space).
*/

/* 
✅ Example Run:
Input: "babad"
Centers checked:
  i=0 -> "b"
  i=1 -> "bab"
  i=2 -> "aba"
  i=3 -> "a"
  i=4 -> "d"
Longest found = "bab" or "aba"

Output: "bab"
*/
