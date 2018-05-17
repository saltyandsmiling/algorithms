function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');
const d = new LinkedListNode('D');
const e = new LinkedListNode('E');
const f = new LinkedListNode('F');

a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

/*
currentNode.next is saved to nextNode
first node.next gets set to null (instantiated)


 */

function reverseLinkedList(firstNode) {
  if (!firstNode.next) throw new Error('LinkedList must have two nodes');

  let prevNode = firstNode;
  let currentNode = firstNode.next;
  let nextNode = firstNode.next.next;
  prevNode.next = null;

  while (currentNode.next !== null) {
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
    nextNode = currentNode.next;
  }

  currentNode.next = prevNode;
  return currentNode;
}


console.log(reverseLinkedList(a));