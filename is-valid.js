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
bst.add(1);
bst.add(4);

/*
depth first search
track the upper or lower limit of the previous
sub trees can be validated as you move down
 */

function isValid(treeRoot) {
  const queue = [];

  queue[0] = {
    node: treeRoot,
    upperBound: Infinity,
    lowerBound: -Infinity
  };

  while (queue.length) {
    const current = queue.shift();

    if (current.value > current.upperBound || current.value < current.lowerBound) {
      return false;
    }

    if (current.node.left) {
      queue.push({
        node: current.node.left,
        upperBound: current.value,
        lowerBound: current.lowerBound
      })
    }

    if (current.node.right) {
      queue.push({
        node: current.node.right,
        upperBound: current.upperBound,
        lowerBound: current.value
      })
    }
  }

  return true;

}

console.log(isValid(bst));