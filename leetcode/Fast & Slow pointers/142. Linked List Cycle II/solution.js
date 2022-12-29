/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null || head.next === null) return null;
  let slow = head;
  let fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) break;
  }
  if (fast.next === null || fast.next.next === null) return null;

  let ptr = head;
  while (slow !== ptr) {
    slow = slow.next;
    ptr = ptr.next;
  }
  return ptr;
};
