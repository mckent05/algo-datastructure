class Node

  attr_accessor :data, :right, :left
  def initialize(data)
    @data = data
    @left = nil
    @right = nil
  end
end

class BST
  

  def addNode(head, data)
    node = Node.new(data)
    if head.nil?
      head = node
      head
    else
      if data < head.data
        head.left = addNode(head.left, data)
      else
        head.right = addNode(head.right, data)
      end
      head
    end
  end

  def printPreOrder(head)
   p head.data
   return if head.nil?
   printPreOrder(head.left) unless head.left.nil?
   printPreOrder(head.right) unless head.right.nil?
  end

  def printInorder(head)
    return if head.nil?
    printInorder(head.left) unless head.left.nil?
    p head.data
    printInorder(head.right) unless head.right.nil?
  end

  def printPostOrder(head)
    return if head.nil?
    printPostOrder(head.left) unless head.left.nil?
    printPostOrder(head.right) unless head.right.nil?
    p head.data
  end

  def print_bfs(node)

    return if node.nil?

    queue = [ node ]

    while queue.length.positive?
      current_element = queue.shift()
      p current_element.data
      queue << current_element.left if current_element.left
      queue << current_element.right if current_element.right
    end
  end

  def include_node?(node, data)
    return false if node.nil?
  
    return true if node.data.to_i == data.to_i
  
    # Recursive calls to check in left or right subtree
    include_node?(node.left, data) || include_node?(node.right, data)
  end
end

head = Node.new(20)

bst = BST.new()
bst.addNode(head, 40)
bst.addNode(head, 3)
bst.addNode(head, 50)
bst.addNode(head, 90)
p bst.include_node?(head, 90)