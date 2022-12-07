/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummyNode = new ListNode(-1);
  let carry = 0;
  let ptr = dummyNode;
  while (l1 !== null || l2 !== null) {
    const v1 = l1 !== null ? l1.val : 0;
    const v2 = l2 !== null ? l2.val : 0;
    const sum = v1 + v2 + carry;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);
    const newNode = new ListNode(digit);
    ptr.next = newNode;
    ptr = ptr.next;
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }
  if (carry !== 0) {
    ptr.next = new ListNode(carry);
  }
  return dummyNode.next;
};
