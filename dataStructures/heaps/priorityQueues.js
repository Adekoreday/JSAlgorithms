class Node {
  constructor(x, y) {
    this.value = x;
    this.priority = y;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  //         6
  //    3         2
  // 4     5

  // this remove the highest priority
  Dequeue() {
    if (this.heap.length == 0) return;
    const highestPriority = this.heap[0];
    const leastPriority = this.heap[this.heap.length - 1];
    //swap first and last priority
    this.heap[this.heap.length - 1] = highestPriority;
    this.heap[0] = leastPriority;
    this.heap.pop();
    let nodeIndex = 0; //sink down
    while (true) {
      const left = this.heap[2 * nodeIndex + 1];
      const right = this.heap[2 * nodeIndex + 2];
      const leastElement = this.heap[nodeIndex];
      if (
        right &&
        right.priority < left.priority &&
        right.priority < leastElement.priority
      ) {
        this.heap[2 * nodeIndex + 2] = leastElement;
        this.heap[nodeIndex] = right;
        nodeIndex = 2 * nodeIndex + 2;
      } else if (
        left &&
        left.priority < right.priority &&
        left.priority < leastElement.priority
      ) {
        this.heap[2 * nodeIndex + 1] = leastElement;
        this.heap[nodeIndex] = left;
        nodeIndex = 2 * nodeIndex + 1;
      } else {
        break;
      }
    }

    return highestPriority;
  }

  Enqueue(x) {
    this.heap.push(x);
    let nodeIndex = this.heap.length - 1;
    if (nodeIndex == 1) return this;
    // trottle up

    while (true) {
      let parentIndex = Math.floor((nodeIndex - 1) / 2);
      if (parentIndex >= 0) {
        // this logic is here cause it's a minimum priority Queue
        if (this.heap[nodeIndex].priority < this.heap[parentIndex].priority) {
          //swap
          this.heap[nodeIndex] = this.heap[parentIndex];
          this.heap[parentIndex] = x;
          nodeIndex = parentIndex;
        } else {
          return this;
        }
      } else {
        return this;
      }
    }
  }
}

const priorityQueue = new PriorityQueue();
const node1 = new Node(1, 6);
const node2 = new Node(2, 5);
const node3 = new Node(3, 4);
const node4 = new Node(6, 3);
const node5 = new Node(3, 2);
const node6 = new Node(7, 1);

priorityQueue.Enqueue(node1);
priorityQueue.Enqueue(node2);
priorityQueue.Enqueue(node3);
priorityQueue.Enqueue(node4);
priorityQueue.Enqueue(node5);
priorityQueue.Enqueue(node6);
priorityQueue.Dequeue();
