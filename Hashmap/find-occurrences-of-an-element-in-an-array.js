/**
 * Problem: Find the k-th occurrence of a number in an array
 *
 * You are given:
 * - nums: an array of integers
 * - queries: an array of integers representing which occurrence we want
 * - x: the target number
 *
 * For each queries[i], return the index of the queries[i]-th occurrence of x in nums.
 * If x occurs fewer times than queries[i], return -1 for that query.
 *
 * Example 1:
 * Input: nums = [1,3,1,7], queries = [1,3,2,4], x = 1
 * Output: [0,-1,2,-1]
 * Explanation:
 * - 1st occurrence of 1 → index 0
 * - 3rd occurrence of 1 → does not exist → -1
 * - 2nd occurrence of 1 → index 2
 * - 4th occurrence of 1 → does not exist → -1
 *
 * Example 2:
 * Input: nums = [1,2,3], queries = [10], x = 5
 * Output: [-1]
 * Explanation:
 * - 10th occurrence of 5 → does not exist → -1
 *
 * Constraints:
 * - 1 <= nums.length, queries.length <= 10^5
 * - 1 <= queries[i] <= 10^5
 * - 1 <= nums[i], x <= 10^4
 */

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) {

    /* -------------------------------
       1. Brute Force Approach
       -------------------------------
       - Scan nums and store all indices of x in temp array
       - For each query, return the k-th index if exists, otherwise -1
       - Time Complexity: O(n + m) roughly, but each query may scan temp
       - Space Complexity: O(n) for temp array
    */

    // let temp = [];
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] === x){
    //         temp.push(i); // store index of x
    //     }
    // }
    // let ans = [];
    // for(let k of queries){
    //     if(k <= temp.length){
    //         ans.push(temp[k-1]); // 1-based to 0-based
    //     } else {
    //         ans.push(-1); // not enough occurrences
    //     }
    // }
    // return ans;


    /* -------------------------------
       2. Optimized Approach (Map)
       -------------------------------
       - Build a map: number -> list of all indices where it occurs
       - This allows fast lookup for any number x and any query
       - Time Complexity: O(n + m)
       - Space Complexity: O(n) for the map
    */

    let indexMap = new Map();
    for(let i = 0; i < nums.length; i++){
        if(!indexMap.has(nums[i])){
            indexMap.set(nums[i], []); // initialize array for each number
        }
        indexMap.get(nums[i]).push(i); // store index
    }

    let occ = indexMap.get(x) || []; // get all indices of x, empty if none

    let ans = [];
    for(let k of queries){
        if(k <= occ.length){
            ans.push(occ[k-1]); // 1-based query → 0-based index
        } else {
            ans.push(-1); // not enough occurrences
        }
    }

    return ans;
};

/* -------------------------------
   Example Runs
   ------------------------------- */
console.log(occurrencesOfElement([1,3,1,7], [1,3,2,4], 1)); // [0,-1,2,-1]
console.log(occurrencesOfElement([1,2,3], [10], 5));        // [-1]
