/**
 * ❓ Question:
 * Given the head of a linked list, determine if the linked list has a cycle in it.
 * A cycle exists if some node can be reached again by continuously following the "next" pointer.
 * Return true if there is a cycle, otherwise return false.
 *
 * Example:
 * Input: head = [3,2,0,-4], pos = 1  // tail connects to node index 1
 * Output: true
 *
 * Input: head = [1,2], pos = -1  // no cycle
 * Output: false
 *
 * Constraints:
 * - The number of nodes in the list is in the range [0, 10^4].
 * - -10^5 <= Node.val <= 10^5
 * - pos is -1 or a valid index in the linked list.
 */

/**
 * 💡 Approach (Floyd’s Cycle Detection Algorithm - Tortoise and Hare):
 * - Use two pointers: slow (1 step), fast (2 steps).
 * - If there is a cycle, slow and fast will eventually meet.
 * - If there is no cycle, fast will reach the end (null).
 *
 * ✅ Time Complexity: O(n)  (each node visited at most twice)
 * ✅ Space Complexity: O(1) (only two pointers used)
 */

var hasCycle = function(head) {
    // Edge case: if list is empty or has only one node, it can't form a cycle
    if (!head || !head.next) return false;

    // Initialize two pointers
    let slow = head; // moves one step at a time
    let fast = head; // moves two steps at a time

    // Traverse the list while ensuring fast and fast.next are not null
    while (fast && fast.next) {
        slow = slow.next;         // move slow by 1 step
        fast = fast.next.next;    // move fast by 2 steps

        // If slow and fast meet, it means there is a cycle
        if (slow === fast) return true;
    }

    // If fast reached null, then there is no cycle
    return false;
};
