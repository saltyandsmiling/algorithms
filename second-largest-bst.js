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
bst.add(6);
bst.add(100);
bst.add(7);
bst.add(50);
bst.add(8);
bst.add(65);

/*
go all the way to the rig ht and hold on to the second to last value
if the right most item doesn't have a left
 */

function secondLargest(bst) {
  if (!bst.left && !bst.right) console.log('error');

  let node = bst;
  let secondLargestValue = bst.left.value || bst.value;

  while (node.right) {
    secondLargestValue = node.value;
    node = node.right;
  }

  if (node.left) {
    node = node.left;
    secondLargestValue = node.value;
    while (node.right) {
      node = node.right;
      secondLargestValue = node.value;
    }
  } else {
    return secondLargestValue;
  }

  console.log(secondLargestValue)
}

secondLargest(bst);