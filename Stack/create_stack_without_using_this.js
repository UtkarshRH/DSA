function createStack(){
    const items = [];

    return{
        push(elem){
            items.push(elem)
        },
        pop(){
            if(this.isEmpty()) return "stack is empty"
            return items.pop()
        },
        peek(){
            if(items.length===0) return "stack is empty"
            return items[items.length-1]
        },
        isEmpty(){
            return items.length===0
        },
        size(){
            return items.length
        },
        print(){
            console.log("Stack: ",items.toString())
        }
    }
}


const stack = new createStack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print() // 10,20,30
console.log(stack.pop()) // 30
console.log(stack.peek()) // 20
console.log(stack.isEmpty()) // false
console.log(stack.size()) // 2
stack.print() // 10,20

/*
 * Problem: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * Constraints:
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * Only one valid answer exists.
 *
 * Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?
 */

/** -------------------------------
 * 1. Brute Force Approach
 * -------------------------------
 * - Check all pairs using two loops.
 * - Return the pair of indices if they sum to target.
 * - Time Complexity: O(n^2)
 * - Space Complexity: O(1)
 */
var twoSumBruteForce = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]; // found the pair
            }
        }
    }
    return []; 
}   

/** -------------------------------
 * 2. Optimized Approach (Hash Map)
 * -------------------------------
 * - Use a Map to store previously seen numbers and their indices.
 * - For each number:
 *     * Calculate complement = target - num
 *     * If complement is already in the map, return [map.get(complement), i]
 *     * Otherwise, store the number in the map
 * - Time Complexity: O(n)
 * - Space Complexity: O(n)
 */
var twoSumOptimized = function(nums, target) {
    const map = new Map(); // number → index
    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (map.has(comp)) {
            return [map.get(comp), i]; // found the pair
        }
        map.set(nums[i], i); // store current number with index
    }
    return []; 
}