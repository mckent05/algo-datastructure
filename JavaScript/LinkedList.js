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
        this.count = 0
    }

    // printRecursiveReverse(head, pos) {
    //     if(head === null || head.next === null) {
    //         return head
    //     }
    //     let p = this.printRecursiveReverse(head.next, pos--)
    //     this.count++
    //     if(this.count === pos) {
    //         console.log(head.data)
    //     }
    //     return p
    // }

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

    printListInReverse(head) {
        if(head === null || head.next === null) {
            console.log(head.data)
            return head
        }
        let p = this.printListInReverse(head.next)
        console.log(head.data)
        return p
    }

    addNodeRecursive(head, data) {
        if(head === null) {
            head = new Node(data)
            return;
        }
        if(head.next === null) {
            head.next = new Node(data)
            return;
        }
        this.addNodeRecursive(head.next, data)
        return head
    }

    insertAtIndexRecurisve(head, index, count, data) {
        if(index === 0) {
            if(head === null) {
                head = new Node(data)
            } else {
                const node = new Node(data)
                let current = head
                head = node
                node.next = current
            }
            return head
        }
        
        if(count === index - 1) {
           let next = head.next
           const node = new Node(data)
           head.next = node
           node.next = next
           return head;
        }
        this.insertAtIndexRecurisve(head.next, index, count +1, data)
        return head
        
    }

    deleteAtIndexRecurisve(head, index, count) {
        if(index === 0) {
            if(head === null) {
                return null
            } else {
                let next = head.next
                head = next
                return head
            }
        }
        
        if(count === index - 1) {
           let next = head.next.next
           head.next = next
           return head;
        }
        this.insertAtIndexRecurisve(head.next, index, count +1)
        return head
        
    }
    replaceAtIndexRecurisve(head, index, count, data) {
        if(index === 0) {
            if(head === null) {
                return null
            } else {
                head.data = data
                return head
            }
        }
        
        if(count === index - 1) {
           let next = head.next
           next.data = data
           return head;
        }
        this.insertAtIndexRecurisve(head.next, index, count +1, data)
        return head
        
    } 
    // deleteDuplicateNode(head) {
    //     let current = head
    //     let previous
    //     if(current === null) {
    //         return head
    //     }
    //     while(current.next !== null) {
    //         previous = current
    //         current = current.next
    //           if(previous.data === current.data) {
    //             previous.next = current.next
    //         }
           
    //     }
    //     return head
    // }
    deleteDuplicateNodeRecursive(head) {
        if(head === null || head.next == null) {
            return head
        }
        this.deleteDuplicateNodeRecursive(head.next)
        if(head.data === head.next.data) {
            head.next = head.next.next
        }
        return head
    }

    cycleDetection (head, visited = new Set()) {
        if(head === null) {
            return head
        }
        if(visited.has(head)) return true
        visited.add(head)
        if(this.cycleDetection) return true
        return false
    }

}

const linkedList = new LinkedList()
linkedList.addNode(20)
linkedList.addNode(20)
linkedList.addNode(20)
linkedList.addNode(20)
linkedList.addNode(30)
linkedList.addNode(30)
linkedList.addNode(30)
linkedList.addNode(30)
linkedList.addNode(40)
linkedList.addNode(40)
linkedList.addNode(40)
console.log(linkedList.deleteDuplicateNodeRecursive(linkedList.head))

// linkedList.printListInReverse(linkedList.head)
// console.log(linkedList.reverseLinkedList(linkedList.head))
// const linkedList2 = new LinkedList()
// console.log(linkedList2.addNodeRecursive(linkedList.head, 2))
// console.log(linkedList2.addNodeRecursive(linkedList.head, 29))
// console.log(linkedList2.insertAtIndexRecurisve(linkedList.head, 2, 0, 5))
// // console.log(linkedList2.deleteAtIndexRecurisve(linkedList.head, 0, 0, 5))
// console.log(linkedList2.replaceAtIndexRecurisve(linkedList.head, 2, 0, 5555))
