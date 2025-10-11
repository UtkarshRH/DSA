/*
📘 Leetcode 647. Palindromic Substrings

🧩 Question:
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.
A substring is a contiguous sequence of characters within the string.

Example:
Input: s = "aaa"
Output: 6

Explanation:
All palindromic substrings are:
"a", "a", "a", "aa", "aa", "aaa"
*/


/*
💡 Approach (Expand Around Center):
- Every palindrome has a "center".
- We can expand around each possible center to find all palindromes.
- There are two types of centers:
    1. Single character (odd-length palindrome)
    2. Between two characters (even-length palindrome)
- For each center, expand left and right while characters match.
- Count all valid palindromic substrings.
*/

var countSubstrings = function(s) {
    let count = 0; // To store total palindrome count

    // 🔹 Helper function to expand around the center
    function expandFromCenter(left, right) {
        // Keep expanding while left & right chars are same
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;  // Found a palindrome
            left--;   // Move left pointer left
            right++;  // Move right pointer right
        }
    }

    // 🔹 Check each character as a potential center
    for (let i = 0; i < s.length; i++) {
        // Odd-length palindromes (center at i)
        expandFromCenter(i, i);

        // Even-length palindromes (center between i and i+1)
        expandFromCenter(i, i + 1);
    }

    return count;
};


/*
🧠 Example Walkthrough:
s = "aaa"
Centers and palindromes:
(0,0) -> "a"
(0,1) -> "aa"
(1,1) -> "a", "aaa"
(1,2) -> "aa"
(2,2) -> "a"
✅ Total = 6
*/


/*
⏱️ Time Complexity: O(n²)
   - Each expansion can take O(n) in the worst case
   - There are 2n centers (odd + even)

💾 Space Complexity: O(1)
   - We only use a few variables; no extra data structures
*/
