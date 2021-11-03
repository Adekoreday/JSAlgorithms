/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr = head;
    let next;
    let prev = null;
    while(curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
  return prev;
};

//recursively

// var reverseList = function(head) {
//     if(head == null) return null;
//     if(!head.next) return head;
    
//    let node = reverseList(head.next)
//    head.next.next=head; //this set node.next=head
//    head.next=null;
//    return node;
// }