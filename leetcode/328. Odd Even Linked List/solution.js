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
var oddEvenList = function (head) {
  if (head === null) return head;
  let ptr = head;
  const EVEN = 0;
  const ODD = 1;

  const oddDummy = new ListNode();
  const evenDummy = new ListNode();
  const tailDummy = [evenDummy, oddDummy];
  let trigger = ODD;
  while (ptr !== null) {
    tailDummy[trigger].next = ptr;
    tailDummy[trigger] = tailDummy[trigger].next;
    // trigger = trigger === 1 ? 0 : 1;
    trigger ^= 1;
    ptr = ptr.next;
  }

  tailDummy[ODD].next = evenDummy.next;
  tailDummy[EVEN].next = null;
  return oddDummy.next;
};
