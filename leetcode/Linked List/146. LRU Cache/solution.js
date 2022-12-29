/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.head = new Node();
  this.tail = new Node();
  // Connect Head-Tail
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.table = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (key in this.table) {
    // deleteNode
    const detechedNode = this.deleteNode(this.table[key]);
    // insertHead
    this.insertHead(detechedNode);
    return this.table[key].val;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (key in this.table) {
    this.table[key].val = value; // Update in Cache value
    // deleteNode
    const detechedNode = this.deleteNode(this.table[key]);
    // insertHead
    this.insertHead(detechedNode);
    return;
  }
  const newNode = new Node(key, value);
  if (this.size === this.capacity) {
    // deleteNode from tail
    this.deleteNode(this.tail.prev);
    this.size -= 1;
  }
  // insertHead
  this.insertHead(newNode);
  this.size += 1;
};

LRUCache.prototype.insertHead = function (node) {
  node.next = this.head.next;
  this.head.next.prev = node;
  node.prev = this.head;
  this.head.next = node;
  this.table[node.key] = node;
};

LRUCache.prototype.deleteNode = function (node) {
  const next = node.next;
  node.prev.next = next;
  next.prev = node.prev;
  delete this.table[node.key];
  return node;
};

class Node {
  constructor(k, v, p, n) {
    this.key = k;
    this.val = v;
    this.prev = p;
    this.next = n;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
