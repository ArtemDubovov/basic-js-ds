const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  queue = {
    value: undefined,
    next: null
  }
  queueLength = 0

  getUnderlyingList() {
    return this.queue;

  // function getLastEl(queue){
  //     if(queue.next == null){
  //       return queue;
  //     } else {
  //       return getLastEl(queue.next);
  //     }
  //   }
  //   return getLastEl(this.queue);
  }

  enqueue(value) {
    let length = this.queueLength;
    console.log(this.queue);
    console.log(length);
    let el = {
      value: value,
      next : null,
    }
    function getLastEl(queue){

      if(length == 0){
        queue.value = el.value;
        queue.next = el.next;
        return;
      } else if(queue.next == null){
        queue.next = el;
        return;
      } else {
        getLastEl(queue.next);
      }
    }
    getLastEl(this.queue);
    this.queueLength++;
  }

  dequeue() {
    let next = this.queue.next;
    let value = this.queue.value;
    this.queue.value = next.value;
    this.queue.next = next.next;
    next.next = null;
    return value;
  }
}


module.exports = {
  Queue
};
