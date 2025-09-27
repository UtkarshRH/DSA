/**
 * 📝 Question:
 * Given the head of a singly linked list, remove the nth node from the end of the list
 * and return its head.
 * 
 * Example 1:
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 * 
 * Example 2:
 * Input: head = [1], n = 1
 * Output: []
 * 
 * Example 3:
 * Input: head = [1,2], n = 1
 * Output: [1]
 * 
 * Constraints:
 * - The number of nodes in the list is sz.
 * - 1 <= sz <= 30
 * - 0 <= Node.val <= 100
 * - 1 <= n <= sz
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var removeNthFromEnd = function(head, n) {
    // Step 1: Create a dummy node pointing to head
    // This helps handle edge cases (like removing the first node)
    let dummy = new ListNode(0, head);

    // Step 2: Initialize two pointers at dummy
    let slow = dummy;
    let fast = dummy;

    // Step 3: Move fast pointer n + 1 steps ahead
    // This ensures slow will point to the node *before* the target node
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Step 4: Move both pointers until fast reaches the end
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    // Step 5: Remove the nth node from end
    slow.next = slow.next.next;

    // Step 6: Return the new head
    return dummy.next;
};

/**
 * 🔑 Explanation:
 * - We use the "two-pointer technique" (fast and slow pointers).
 * - Fast pointer moves n+1 steps ahead of slow, creating a gap of n nodes.
 * - When fast reaches the end, slow is right before the node to remove.
 * - Adjust slow.next to skip the target node.
 * - Dummy node simplifies edge cases, like removing the first node.
 *
 * ⏱ Time Complexity: O(n) → one traversal of the list
 * 💾 Space Complexity: O(1) → only two pointers used
 */
