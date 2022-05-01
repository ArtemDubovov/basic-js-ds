const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }
  

  root() {
    if(!this.tree) {
      return null;
    } else {
      return this.tree;
    }
  }

  add(data) {
    let tree = this.tree;
    function addData(data, node){
      console.log(node, data);
      if(!node){
        console.log('add node', node);
        let el = {
          data : data,
          left : null,
          right : null
        }
       node = el;
       console.log(tree);
       return node;
      }
      if(data < node.data){
        console.log('элемент меньше')
        node.left = addData(data, node.left);
        return node;
      } else if(data > node.data){
        console.log('элементы больше')
        node.right = addData(data, node.right);
        return node;
      } else {
        console.log('элементы равны')
        return node;
      }
    }
    console.log(this.tree);
    this.tree = addData(data,this.tree);

  }

  has(data) {
    function search(data, node){
      if(!node){
        return false;
      }
      if(data == node.data){
        return true;
      }
      if(data > node.data){
        return search(data, node.right);
      } else if(data < node.data){
        return search(data, node.left);
      }
    }
    return search(data, this.tree);
  }

  find(data) {
    function search(data, node){
      if(!node) return null;
      if(data == node.data){
        return node;
      }
      if(data > node.data){
        return search(data, node.right);
      } else {
        return search(data, node.left);
      }
    }
    return search(data, this.tree);
  }

  remove(data) {
    function search(data, node){
      if(!node) return null;
      if(data == node.data){
        console.log('find!');
        if(!node.left && !node.right){
          node = null;
          console.log('find', node);
          return node;
        }
        if(!node.left){
          console.log()
          node = node.right;
          return node;
        }
        if(!node.right){
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left){
          minRight = minRight.left;
        }
        node.data = minRight.data;

        node.right = search(minRight.data, node.right);
      }
      if(data > node.data){
        node.right = search(data, node.right)
        return node;
      } else {
        node.left = search(data, node.left);
        return node;
      }
    }
    this.tree = search(data, this.tree);
    console.log(this.tree, 'remove', data);
  }

  min() {
    let tree = this.tree;
    while(tree.left){
      tree = tree.left;
    }
    return tree.data;
  }

  max() {
    let tree = this.tree;
    while(tree.right){
      tree = tree.right;
    }
    return tree.data;
  }
}

module.exports = {
  BinarySearchTree
};