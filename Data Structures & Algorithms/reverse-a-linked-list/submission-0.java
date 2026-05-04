/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public ListNode reverseList(ListNode head) {
        if (head == null) {
            return null;
        }

        ListNode curr = head;
        ListNode prev = null;
        ListNode next = null;

        while (curr != null) {
            next = curr.next;
            // ListNode nextToNext;
            // if(next != null) {
            //     nextToNext = next.next;
            // }
            curr.next = prev;
            prev = curr;
            curr = next;
            // next = next.next

            // next.next = curr;

        }
        return prev;
    }
}
