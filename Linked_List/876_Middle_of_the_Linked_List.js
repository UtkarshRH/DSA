/**
 * 📝 Question:
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 *
 * Example:
 * Input: [1,2,3,4,5]
 * Output: [3,4,5]  (middle node is 3)
 *
 * Input: [1,2,3,4,5,6]
 * Output: [4,5,6]  (middle node is 4)
 *
 * Function Signature:
 * var middleNode = function(head) {}
 */

/**
 * 🔑 Approach:
 * - We use the **two-pointer technique** (slow and fast pointers).
 * - The `slow` pointer moves one step at a time.
 * - The `fast` pointer moves two steps at a time.
 * - When the `fast` pointer reaches the end (null), the `slow` pointer will be at the middle.
 * - This works because the fast pointer covers the list twice as quickly as the slow one.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var middleNode = function(head) {
    let slow = head;  // moves one step
    let fast = head;  // moves two steps
    
    // edge cases: if list is empty or has only one node
    if (head === null || head.next === null) return head;
    
    // move slow by 1 and fast by 2 until fast reaches the end
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // slow is now at the middle node
    return slow;
};

/**
 * ✅ Explanation with Example:
 * Suppose linked list = [1 → 2 → 3 → 4 → 5]
 * - Initially: slow = 1, fast = 1
 * - Step 1: slow = 2, fast = 3
 * - Step 2: slow = 3, fast = 5
 * - Step 3: fast reaches null, so slow = 3 (middle)
 *
 * For even case [1 → 2 → 3 → 4 → 5 → 6]
 * - Final slow will point at 4 (the second middle node).
 */

/**
 * ⏱ Time Complexity: O(n) → traverses list once
 * 💾 Space Complexity: O(1) → uses only two pointers
 */
