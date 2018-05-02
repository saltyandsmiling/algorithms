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

function superBalanced(bst) {

}

superBalanced(bst);