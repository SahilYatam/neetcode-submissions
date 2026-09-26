/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (head === null || head.next === null) {
            return false;
        }

        let slowPtr = head,
            fastPtr = head;

        while (slowPtr !== null && fastPtr !== null && fastPtr.next !== null) {
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;

            if (slowPtr === fastPtr) {
                return true;
            }
        }

        return false;
    }
}
