class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    addNode(data) {
        
        if(this.head === null) {
            this.head = new Node(data)
        }
        else {
            let current = this.head
            while(current.next !== null) {
                current = current.next
            }
            current.next = new Node(data)
        }
        this.length++
    }

    insertAtIndex(index, data) {
        let current = this.head
        let previous;
        let node = new Node(data)
        if( index === 0) {
            if (current === null) {
                this.head = new Node(data)
            }
            else {
                this.head = node
                node.next = current
            }
            
        }
        else {
            let count = 0
            while(count < index) {
                previous = current
                current = current.next
                count++
            }
            previous.next = node
            node.next = current
            
        }
        this.length++
    }
    replaceAtIndex(index, data) {
        let current = this.head;
        let node = new Node(data)
        if(index > this.length) {
            console.log("Wrong index please")
            return;
        } 
        if(index === 0) {
            if(current === null) {
                this.head = node
            } else {
                current.data = data
            }
        }
        else {
            let count = 0
            while(count < index) {
                current = current.next
                count++
            }
            current.data = data
        }
    }

    getDataAtIndex(index){
        let count = 0
        let current = this.head
        while(count < index){
            current = current.next
            count++
        }
        console.log(current.data)
    }

    deleteDataAtIndex(index){
        let count = 0
        let current = this.head
        if(index === 0) {
            if(current === null) {
                return;
            }
            this.head = current.next
        }
        else {
            let previous;
            while(count < index) {
                previous = current
                current = current.next
                count++
            }
            previous.next = current.next
        }
        this.length--
    }

    reverseLinkedList(head) {
        if(head === null || head.next === null ) {
            return head;
        }
        let p = this.reverseLinkedList(head.next)
        head.next.next = head
        head.next = null
        return p
    }
    
}

const linkedList = new LinkedList()
linkedList.addNode(20)
linkedList.addNode(50)
linkedList.addNode(30)
linkedList.addNode(15)
console.log(linkedList.reverseLinkedList(linkedList.head))
