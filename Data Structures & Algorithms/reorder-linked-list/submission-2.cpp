/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution {
   public:
    void reorderList(ListNode* head) {
        // Edge case: empty list or single node list requires no reordering
        if (head == nullptr || head->next == nullptr) {
            return;
        }

        // 1. Find the middle of the linked list
        ListNode* slow = head;
        ListNode* fast = head;

        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }

        // 2. Reverse the second half of the list
        ListNode* second = slow->next;
        slow->next = nullptr;  // Sever the list into two halves
        ListNode* prev = nullptr;

        while (second != nullptr) {
            ListNode* temp = second->next;  // Save next node
            second->next = prev;            // Reverse pointer

            prev = second;  // Advance prev
            second = temp;  // Advance second
        }

        // 3. Merge the first half and the reversed second half
        ListNode* first = head;
        second = prev;  // 'prev' is now the head of the reversed second half

        while (first != nullptr && second != nullptr) {
            ListNode* temp1 = first->next;
            ListNode* temp2 = second->next;

            first->next = second;
            second->next = temp1;

            first = temp1;
            second = temp2;
        }
    }
};
