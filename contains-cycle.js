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
b.next = c;
c.next = d;
d.next = e;
e.next = a;

function containsCycle(firstNode) {

  // start both runners at the beginning
  let slowRunner = firstNode;
  let fastRunner = firstNode;

  // until we hit the end of the list
  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;

    // case: fastRunner is about to "lap" slowRunner
    if (fastRunner === slowRunner) {
      return true;
    }
  }

  // case: fastRunner hit the end of the list
  return false;
}


console.log(containsCycle(a));
