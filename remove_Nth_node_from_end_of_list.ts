/**
 * Definition for singly-linked list.
 class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let count: number = 0;
  let prev: ListNode | null = null;
  let slow = head;
  function recursive(current: ListNode | null) {
    if (current) {
      if (count === n) {
        prev = slow;
        slow = slow?.next || null;
      } else {
        count++;
      }

      return recursive(current?.next || null);
    }
  }
  recursive(head);

  if (prev) (prev as ListNode).next = (prev as ListNode).next?.next || null;
  else head = slow?.next || null;

  return head;
}
