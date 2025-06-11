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

    printNodePreOrder(head) {
        console.log(head.data)
        if(head === null) {
            return
        }
        if(head.left !== null) {
            this.printNodePreOrder(head.left)
        }
        if(head.right !== null) {
            this.printNodePreOrder(head.right)
        }
    }

    printNodeInOrder(head) {
        if(head === null) {
            return
        }
        if(head.left !== null) {
            this.printNodeInOrder(head.left)
        }
        console.log(head.data)
        if(head.right !== null) {
            this.printNodeInOrder(head.right)
        }
    }

    printNodePostOrder(node) {
        if(node ===null) {
            return
        }
        if(node.left !== null) {
            this.printNodePostOrder(node.left)
        }
        if(node.right !== null) {
            this.printNodePostOrder(node.right)
        }
        console.log(node.data)
    }

    bfsTraversal(node) {
        let queue = [ node ]
        while(queue.length > 0) {
            let current = queue.shift()
            console.log(current.data)
            if(current.left !== null) queue.push(current.left)
            if(current.right !== null) queue.push(current.right)
        }
    }

    doesInclude(node, target) {
            if(node ===null) {
                return
            }
            if(node.data === target) {
                return true
            }
            if(node.left !== null) {
                this.printNodePostOrder(node.left)
            }
            if(node.right !== null) {
                this.printNodePostOrder(node.right)
            }
            return false
    }
}

const bst = new BST()

const firstNode = bst.addNode(null, 2)
bst.addNode(firstNode, 7)
bst.addNode(firstNode, 1)
console.log(bst.addNode(firstNode, 8))
console.log(bst.addNode(firstNode, 6))
console.log(bst.bfsTraversal(firstNode))