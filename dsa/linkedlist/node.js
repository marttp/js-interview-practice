export class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

export class SinglyNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

export class DoublyNode {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

export const genMockLinkedList = () => {
  const a = new Node(5);
  const b = new Node(2);
  const c = new Node(7);
  const d = new Node(4);
  const e = new Node(6);
  const f = new Node(8);
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  return a;
};
