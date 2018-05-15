function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

a.next = b;
b.next = c;

function deleteNode(node) {
  node.value = node.next.value;
  node.next = node.next.next || null;
}

deleteNode(b);

console.log(a);
