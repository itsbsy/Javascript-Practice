// Node class represents a node in the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // LinkedList class represents the linked list
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Insert a new node at the end of the linked list
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  
    // Insert a new node at the beginning of the linked list
    prepend(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // Delete a node with the given data from the linked list
    delete(data) {
      if (!this.head) {
        return;
      }
  
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      while (current.next && current.next.data !== data) {
        current = current.next;
      }
  
      if (current.next) {
        current.next = current.next.next;
      }
    }
  
    // Print the linked list elements
    print() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.append(2);
  linkedList.append(6);
  linkedList.prepend(0);
  linkedList.print(); // Output: 0 1 2 3
  
  linkedList.delete(2);
  linkedList.print(); // Output: 0 1 3
  