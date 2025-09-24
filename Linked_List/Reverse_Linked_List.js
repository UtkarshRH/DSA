/**
 * Problem:
 * Given the head of a singly linked list, reverse the list and return the reversed list.
 *
 * Example:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 * Explanation:
 * - A singly linked list is a sequence of nodes where each node has a value and a pointer to the next node.
 * - Reversing means the last node becomes the head and all pointers are reversed.
 * - We'll use three pointers: prev, curr, and next.
 * 
 * Approach:
 * 1. Initialize prev = null, curr = head
 * 2. Loop while curr is not null:
 *    a. Save next node: next = curr.next
 *    b. Reverse pointer: curr.next = prev
 *    c. Move prev and curr forward: prev = curr, curr = next
 * 3. Return prev (new head)
 *
 * Time Complexity: O(n) - we visit each node once
 * Space Complexity: O(1) - we only use 3 extra pointers
 */

// Definition for singly-linked list node
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// Function to reverse the linked list
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let next = null;

    while(curr !== null){
        next = curr.next;   // save next node
        curr.next = prev;   // reverse pointer
        prev = curr;        // move prev forward
        curr = next;        // move curr forward
    }

    return prev; // new head
};

// Helper function to print linked list as array
function printList(head) {
    let result = [];
    let temp = head;
    while(temp) {
        result.push(temp.val);
        temp = temp.next;
    }
    console.log(result);
}

// Test Case
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original List:");
printList(head);

let reversedHead = reverseList(head);
console.log("Reversed List:");
printList(reversedHead);

// Output:
// Original List: [1,2,3,4,5]
// Reversed List: [5,4,3,2,1]
