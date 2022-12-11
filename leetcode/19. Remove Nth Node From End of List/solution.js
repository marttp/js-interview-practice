/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let firstPtr = head;
  for (let i = 0; i < n; i++) {
    firstPtr = firstPtr.next;
  }
  if (firstPtr == null) {
    return head.next;
  }
  let secondPtr = head;
  while (firstPtr.next !== null) {
    firstPtr = firstPtr.next;
    secondPtr = secondPtr.next;
  }
  secondPtr.next = secondPtr.next.next;
  return head;
};
