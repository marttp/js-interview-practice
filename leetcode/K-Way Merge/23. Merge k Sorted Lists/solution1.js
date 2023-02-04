const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists === null || lists.length === 0) return null;

  const pq = new MinPriorityQueue({ priority: (e) => e.val });
  for (const l of lists) {
      if (l !== null) {
          let current = l;
          while (current !== null) {
              const tmp = current;
              pq.enqueue(current);
              current = current.next;
              tmp.next = null;
          }
      }
  }

  const dummy = new ListNode();
  let ptr = dummy;
  while (!pq.isEmpty()) {
      const node = pq.dequeue().element;
      ptr.next = node;
      ptr = ptr.next;
  }
  
  return dummy.next;
};