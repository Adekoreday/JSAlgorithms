class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
   class SingleList{
     constructor(){
       this.head = null;
       this.tail = null;
       this.length= 0;
     }
     push (val){
       let node = new Node(val);
       if(!this.head) {
         this.head = node;
         this.tail = this.head;
       }else{
         this.tail.next = node;
         this.tail = node;   
       }
       ++this.length;
     }
     pop() {
      let current = this.head;
      let prev = current;
       while(current.next) {
         prev = current;
         current = current.next
       }
  
     }
  }
  
  let newlist = new SingleList();
  newlist.push('hello');
  newlist.push(1);
  newlist.push(13);
  console.log(newlist);
  