import { genMockLinkedList } from './node.js';
import { linkedListValue } from './ll_traversal.js';

export const reverseIter = (head) => {
  let prev = null;
  while (head !== null) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

export const reverseRecursive = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseRecursive(next, head);
}

const example1 = () => {
  const head = genMockLinkedList();
  const reversedLinkedList = reverseIter(head);
  linkedListValue(reversedLinkedList);
};

const example2 = () => {
  const head = genMockLinkedList();
  const reversedLinkedList = reverseRecursive(head);
  linkedListValue(reversedLinkedList);
};

// example1();
// example2();