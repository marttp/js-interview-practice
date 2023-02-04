const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null && list2 === null) return null;
  if (list1 !== null && list2 === null) return list1;
  if (list1 === null && list2 !== null) return list2;

  const dummy = new ListNode();
  let current = dummy;
  const pq = new MinPriorityQueue({ priority: (e) => e.val });
  pq.enqueue(list1).enqueue(list2);

  while (!pq.isEmpty()) {
    const node = pq.dequeue().element;
    current.next = node;
    if (node.next !== null) {
      pq.enqueue(node.next);
    }
    current = current.next;
  }

  return dummy.next;
};
