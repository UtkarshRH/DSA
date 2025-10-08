/**
 * 🧩 Question:
 * Merge Two Sorted Linked Lists
 * 
 * You are given the heads of two sorted linked lists, list1 and list2.
 * Merge the two lists into a single sorted linked list and return its head.
 * 
 * Example:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 * 
 * The linked lists should be merged in a way that preserves the order.
 */

var mergeTwoLists = function(head1, head2) {
    // If one of the lists is empty, return the other list
    if (head1 === null || head2 === null) {
        return head1 === null ? head2 : head1;
    }

    // Compare the current node values of both lists
    if (head1.val <= head2.val) {
        // If head1's value is smaller, link it to the merged result of the rest
        head1.next = mergeTwoLists(head1.next, head2);
        return head1;
    } else {
        // Otherwise, head2's value is smaller
        head2.next = mergeTwoLists(head2.next, head1);
        return head2;
    }
};
