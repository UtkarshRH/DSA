/**
 * Question:
 * Given an array of strings `strs`, group the anagrams together.
 * You can return the answer in any order.
 * 
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 * 
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 * 
 * ------------------------------------------------------------
 * Explanation of Approach (Sorted Approach):
 * - Two words are anagrams if they contain the same letters
 *   in the same frequency, just arranged differently.
 * - So, if we sort the letters of each word, all anagrams will
 *   produce the same sorted result (called a "key").
 * - We use a HashMap (key → sorted word, value → list of words).
 * - Steps:
 *   1. Create an empty map.
 *   2. For each word in strs:
 *        - Sort its characters.
 *        - Use this sorted string as a key.
 *        - Insert the original word into the corresponding list.
 *   3. Return all lists (values of the map).
 * 
 * ------------------------------------------------------------
 * Time Complexity:
 * - Sorting each word: O(k log k), where k = length of word.
 * - For n words: O(n * k log k).
 * Space Complexity: O(n * k) for storing all groups.
 */

var groupAnagrams = function(strs) {
    let map = new Map(); // key = sorted word, value = list of anagrams

    for (let word of strs) {
        // Convert word into a sorted key
        let key = word.split('').sort().join(''); // e.g., "eat" → "aet"

        // If the key is not already in map, initialize with empty list
        if (!map.has(key)) {
            map.set(key, []);
        }

        // Add the word to its group
        map.get(key).push(word);
    }

    // Return all the grouped anagrams
    return Array.from(map.values());
};

// Example Run:
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
