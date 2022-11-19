import { genMockLinkedList } from './node.js';

const a = genMockLinkedList();

export const traverseLinkedList = (a = genMockLinkedList()) => {
  let head = a;
  while (head !== null) {
    console.log(`Node ${head.val}`);
    head = head.next;
  }
};

const traverseRecursive = (head = null) => {
  if (head === null) {
    return;
  }
  console.log(`Node ${head.val}`);
  traverseRecursive(head.next);
};

export const linkedListValue = (a = genMockLinkedList()) => {
  let head = a;
  const listVal = [];
  while (head !== null) {
    listVal.push(head.val);
    head = head.next;
  }
  console.log(`List: ${listVal}`);
};

// traverseLinkedList();
// traverseRecursive(a);
// linkedListValue();
