class Heap {
  constructor() {
    this.value = [];
  }

  //this is the insertion logic
  Insert(x) {
    this.value.push(x);
    let indexOfX = this.value.length - 1;
    if (indexOfX == -1) {
      this.value[0] = x;
      return this;
    }
    while (true) {
      const parentIndex = Math.floor((indexOfX - 1) / 2);
      if (parentIndex >= 0) {
        const parentVal = this.value[parentIndex];   
        if (x > parentVal) {
          //swap
          this.value[indexOfX] = parentVal;
          this.value[parentIndex] = x;
          indexOfX = parentIndex;
        } else {
          return this;
        }
      } else return this;
    }
  }
}

const heap = new Heap();
heap.Insert(5);
heap.Insert(6);
heap.Insert(7);
heap.Insert(8);
heap.Insert(20);
heap.Insert(1);

console.log(heap.value, "this is the value of the heap>>>>>");
///     7
///  6     5
// 2  1  3   4
//                 9
