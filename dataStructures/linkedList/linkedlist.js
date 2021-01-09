
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(x) {
    const newNode = new Node(x);
    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    let current = this.head
    let newtail;
    while (current.next) {
      newtail = current;
      current = current.next
    }

    this.tail = newtail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
  }

  shift() {
    if (!this.head) return undefined
    const shiftedHead = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return shiftedHead;
  }

  unshift(x) {
    const newNode = new Node(x);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldhead = this.head;
      this.head = newNode;
      this.head.next = oldhead;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return null;
    }
    let current = this.head;
    let count = 0;
    while (count != index) {
      current = current.next;
      ++count;
    }
    return current;
  }

  set(value, index) {
    const current = this.get(index);
    if(current) {
    current.val = value;
    return true;
    }
    return false;
  }

  insert(value, index) {
//check if the index is valid 
// insert can be done at the end or begining of the lsit
    if (index > this.length || index < 0) return false
    const newNode = new Node(value);
    let result;
// if insertion should occour at the begining we use unshift
//if insertion should occour at the end we use pop
//else treat like the normal case
    switch (index) {
      case 0: 
      result = this.unshift(newNode)
      break;
      case this.length:
       this.push(value);
       result = true;
       break;
      default: 
      const current = this.get(index)
      const prevCurrent = this.get(index - 1)
      if(current && prevCurrent){
      prevCurrent.next = newNode;
      newNode.next = current;
      result =  true;
      }else {
        result = false;
      }
    }
    return result;

  }

  remove(index) {
    if(index < 0 || index > this.length) return undefined
    this.length -= 1;
    if(index === 0) return this.shift();
    else if(index === this.length) return this.pop();
    else {
    const removeItem = this.get(index);
    const nextItem = removeItem.next;
    const previous = this.get(index - 1);
    previous.next = nextItem
    return removeItem
    }
  }
}

const newlinkedList = new LinkedList();

newlinkedList.push("hello");
newlinkedList.push("world");

newlinkedList.push(200);
newlinkedList.unshift("great");

newlinkedList.unshift("greatest");
newlinkedList.unshift("greatest head");

newlinkedList.insert('korex',6);
console.log(newlinkedList.get(0), 'this is the linkedlist before >>>')