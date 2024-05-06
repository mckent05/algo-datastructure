class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST {


    addNode(head, data) {
        const node = new Node(data)
        if(head === null) {
            head = node
            return head
        }
        if(data < head.data) {
            head.left = this.addNode(head.left, data)
        }
        if(data > head.data) {
            head.right = this.addNode(head.right, data)
        }
        return head
    }

    printNode(head) {
        if(head === null) {
            console.log(head.data)
            return
        }
        if(head.left !== null) {
            this.printNode(head.left)
        }
        if(head.right !== null) {
            this.printNode(head.right)
        }
        console.log(head.data)
    }
}

const bst = new BST()

const firstNode = bst.addNode(null, 2)
bst.addNode(firstNode, 7)
bst.addNode(firstNode, 1)
console.log(bst.addNode(firstNode, 8))
console.log(bst.addNode(firstNode, 6))
bst.printNode(firstNode)