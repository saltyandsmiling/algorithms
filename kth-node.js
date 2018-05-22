function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

const a = new LinkedListNode("Angel Food");
const b = new LinkedListNode("Bundt");
const c = new LinkedListNode("Cheese");
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function kthToLastNode(k, list) {
  //check if list has two nodes, if k is an integer,

  let counter = 1;
  let kthNode = list;
  let kNodesAhead = list;

  while (counter < k) {
    kNodesAhead = kNodesAhead.next;
    counter += 1;
  }

  while (kNodesAhead.next) {
    kthNode = kthNode.next;
    kNodesAhead = kNodesAhead.next;
  }

  return kthNode.value;
}

console.log(kthToLastNode(2, a));
