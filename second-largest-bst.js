function BinarySearchTree(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinarySearchTree.prototype.add = function(value) {
  if (value < this.value) {
    this.left ? this.left.add(value) : this.left = new BinarySearchTree(value);
  } else {
    this.right ? this.right.add(value) : this.right = new BinarySearchTree(value);
  }
};

const bst = new BinarySearchTree(5);
bst.add(2);
bst.add(3);
bst.add(7);
bst.add(6);

function secondLargest(bst) {
  const stack = [];
  let high = bst.value;
  let second = null;
  stack[0] = bst;

  while (stack.length) {
    let node = stack.pop();

    if (node.value > high) {
      second = high;
      high = node.value;
    }

    if (node.value > second && node.value < high) second = node.value;

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

console.log(second)

}

secondLargest(bst);