# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode | None, n: int) -> ListNode | None:
        dummy = ListNode(0, head)

        left = dummy
        right = head

        # left prt will point dummy node
        # right ptr will point head 1+ node
        # gap between in left and right will be n
        while n > 0 and right:
            right = right.next
            n -= 1
        
        while right is not None:
            left = left.next
            right = right.next
        
        # delete
        left.next = left.next.next

        return dummy.next
