const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let list = l;
  let prev;
  let nextElement;
  console.debug(l, 'first');

  function checkElements(l,k){
    if(l.next == null){
      if(l.value == k){   
        l.next = null;
        prev.next = null;
        }
      return list;
      }
      
     else {
      console.debug(l, 'check...');
      try{
        if(l.value == k){   
          if(prev == undefined){
            nextElement = l.next;
            l.next = nextElement.next;
            l.value = nextElement.value;
          } else {
            nextElement = l.next;
            prev.next = nextElement;
            l.next = null;
          }
        } else{
          nextElement = l.next;
          prev = l;
        }
        return checkElements(nextElement,k);
      } catch (e){
        console.debug(e);
      }
      
    }
  }
  return checkElements(l, k);
}

module.exports = {
  removeKFromList
};
