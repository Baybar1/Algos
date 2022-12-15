class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            return this;
        } 
        newNode.next = this.head;
        this.head = newNode;
        return this;
    } 

    display() {
        let runner = this.head;
        while (runner !== null) {
            console.log(runner.data)
            runner = runner.next
        }
        return String(runner);
    }
}

let LinkedList1 = new LinkedList()
LinkedList1.addFront(18)
LinkedList1.addFront(5)
LinkedList1.addFront(73)
console.log(LinkedList1.head)
console.log(LinkedList1.display())


