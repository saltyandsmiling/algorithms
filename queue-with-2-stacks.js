function Queue() {
  this.stack1 = [];
  this.stack2 = [];
}

Queue.prototype.enqueue = function(el) {
  //if stack2 is empty, push to stack1
  if (!this.stack2.length) {
    this.stack1.push(el)
  } else {
    //if stack2 has elements, pop them off and put them back on stack 1 before pushing el
    const length = this.stack2.length
    for (let i = 0; i < length; i++) {
      const node = this.stack2.pop();
      this.stack1.push(node);
    }
    this.stack1.push(el)
  }
};

Queue.prototype.dequeue = function() {
  //move stack1 to stack2
  const length = this.stack1.length;
  for (let i = 0; i < length; i++) {
    const node = this.stack1.pop();
    this.stack2.push(node)
  }

  //return item to be dequeued
 return this.stack2.pop();

};

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());


