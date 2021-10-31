class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  Insert(x) {
    if (this.root == null) {
      this.root = new Node(x);
    } else {
      let current = this.root;
      while (true) {
        if (current.val > x) {
          if (current.left == null) {
            current.left = new Node(x);
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (current.right == null) {
            current.right = new Node(x);
            return this;
          } else {
            current = this.current.right;
          }
        }
      }
    }
  }
}

let bst = new BinarySearchTree();

bst.Insert(5);
bst.Insert(100);
bst.Insert(3);

console.log(bst, "this is the bst>>>");

// add logic for INORDER, POST ORDER, PRE ORDER
