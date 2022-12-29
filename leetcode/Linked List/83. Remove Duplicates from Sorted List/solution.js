/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let ptr = head;
  while (ptr !== null) {
    let distPtr = ptr.next;
    while (distPtr !== null && distPtr.val === ptr.val) {
      distPtr = distPtr.next;
    }
    ptr.next = distPtr;
    ptr = ptr.next;
  }
  return head;
};
