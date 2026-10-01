# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        # 1. Find the middle of linked list
        slow, fast = head, head

        while slow and fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # Handle empty list / single-node list
        if slow is None or slow.next is None:
            return

        # 2. Reverse second half
        second = slow.next
        slow.next = None

        prev = None

        while second:
            temp = second.next
            second.next = prev
            
            prev = second
            second = temp

        # 3. Merge first and second half
        first = head
        second = prev

        while first and second:
            temp1 = first.next
            temp2 = second.next

            first.next = second
            second.next = temp1

            first = temp1
            second = temp2










