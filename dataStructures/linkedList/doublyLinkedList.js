 //1 - > 2 < - > 3 < - > 4 

 class Node {
    constructor(val) {
       this.head = null;
       this.next = null;
       this.val = val;
       this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (x) {
        const newNode = new Node(x)
        if(this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
             newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++;
    }

    pop() {
        if(!this.head) return undefined;
        const currentTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else{
            currentTail.next = null;
            this.tail.prev = null;
            this.tail = currentTail;
        }
        this.length--;
        return currentTail;
    }

//update
    set (val, index) {
        if(index< 0 || index >= this.length) {
            return undefined;
        }

        const middle = Math.floor(this.length/2);
        let startLocation = index >= middle ? this.length - 1 : 0;
        let element;
        if(index > middle) {
             element = this.tail;
          while(index != startLocation) {
            element = element.prev;
            startLocation--;
          }
        } else {
            element = this.head;
            while(index != startLocation) {
                element = element.next;
                startLocation++;
            }
        }
        element.val = val;
    } 
// retrieve
    get (index) {
        if(index< 0 || index >= this.length) {
            return undefined;
        }

        const middle = Math.floor(this.length/2);
        let startLocation = index >= middle ? this.length - 1 : 0;
        let element;
        if(index >= middle) {
             element = this.tail;
          while(index != startLocation) {
            element = element.prev;
            startLocation--;
          }
        } else {
            element = this.head;
            while(index != startLocation) {
                element = element.next;
                startLocation++;
            }
        }
        return element;
    }
   //
    unshift (val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        let oldHead = this.head;
        let newHead;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else{
            newHead = this.head.next;
            newHead.prev = null;
            oldHead.next = null;
            this.head = newHead;
        }
        this.length--
        return true;
    }

    // 
    Insert (val, index) {
            if(index < 0 || index > this.length) return undefined;
            if(index == 0) return !!this.unshift(val);
            if(index == this.length) this.push(val);

            let element = this.get(index);
            let prev = element.prev;
            let next = element.next;
            const newval = new Node(val);
            element.prev = newval; newval.next = element;
            prev.next = newval; newval.prev = prev;

            this.length++;
            return true;
    }
  
    //
    Remove (index) {
        if(index == 0) return this.shift();
        if(index == this.length-1) return this.pop();
        let element = this.get(index);
        if(element) {
          let next = element.next;
          let prev = element.prev;
          prev.next = next;
          next.prev = prev;
          element.next = null;
          element.prev = null;
        }
      this.length--
      return true;
    }
}


let dlinkedlist = new DoubleLinkedList();
dlinkedlist.push('korede');
dlinkedlist.push('adeyemi');
dlinkedlist.push('seyi');
dlinkedlist.Remove(1);
console.log(dlinkedlist, 'the double linkedlist')