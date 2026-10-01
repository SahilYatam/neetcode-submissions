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
     * @return {void}
     */
    reorderList(head) {
        if(head === null) return null;

        // 1. Find middle of linked list
        let slow = head, fast = head;
        while(fast !== null && fast.next !== null){
            slow = slow.next; // Move 1 step
            fast = fast.next.next; // Move 2 step
        }

        // 2. Reverse linked list
        let second = slow.next;
        slow.next = null;

        let prev = null, curr = second;
        while(curr){
            let nxt = curr.next;
            curr.next = prev;

            prev = curr;
            curr = nxt;
        }
        
        // 3. Merge the first and second half
        let first = head;
        let secondHalf = prev;

        while(secondHalf !== null){
            let firstNext = first.next;
            let secondNext = secondHalf.next;

            first.next = secondHalf;
            secondHalf.next = firstNext;

            first = firstNext;
            secondHalf = secondNext;
        }
    }
}











