import { SinglyNode, genMockLinkedList } from './node.js';
import { linkedListValue } from './ll_traversal.js';
import { reverseIter } from './ll_reverse.js';

const sumList = (head) => {
  let sum = 0;
  while (head !== null) {
    sum += head.val;
    head = head.next;
  }
  return sum;
};

const sumListRecursive = (head) => {
  if (head === null) {
    return 0;
  }
  return head.val + sumListRecursive(head.next);
};

// console.log(`Result: ${sumList(genMockLinkedList())}`);
// console.log(`Result Recursive: ${sumListRecursive(genMockLinkedList())}`);

const linkedListFinding = (head = genMockLinkedList(), target) => {
  let ptr = head;
  while (ptr !== null) {
    if (ptr.val === target) {
      return true;
    }
    ptr = ptr.next;
  }
  return false;
};

const linkedListFindingRec = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFinding(head.next, target);
};

// console.log(`Finding: ${linkedListFinding(a, 6)}`);
// console.log(`Finding: ${linkedListFindingRec(a, 1)}`);

const zipList = (l1, l2) => {
  // Trigger 0/1
  let dummyNode = new SinglyNode(null);
  let p = dummyNode;
  let ptr1 = l1; // 0
  let ptr2 = l2; // 1
  let toggle = 0;
  while (ptr1 !== null && ptr2 !== null) {
    if (toggle) {
      p.next = new SinglyNode(ptr1.val);
      ptr1 = ptr1.next;
    } else {
      p.next = new SinglyNode(ptr2.val);
      ptr2 = ptr2.next;
    }
    p = p.next;
    toggle ^= 1;
  }
  while (ptr1 !== null) {
    p.next = new SinglyNode(ptr1.val);
    ptr1 = ptr1.next;
  }
  while (ptr2 !== null) {
    p.next = new SinglyNode(ptr2.val);
    ptr2 = ptr2.next;
  }
  return dummyNode.next;
};

const zipListRecursive = (l1, l2) => {
  if (l1 === null && l2 === null) return null;
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  const next1 = l1.next;
  const next2 = l2.next;
  l1.next = next2;
  l2.next = zipListRecursive(next1, next2);
  return l1;
};

linkedListValue(zipList(genMockLinkedList(), reverseIter(genMockLinkedList())));
