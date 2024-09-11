require "pry"
class Node
    attr_accessor :data, :next
    def initialize(data)
        @data = data
        @next = nil
    end
end

class LinkedList
    attr_accessor :head
    def initialize()
        @head = nil
    end

    def add_node_r(head, data)
        if head.nil?
            head = Node.new(data)
        else
            if head.next.nil?
                head.next = Node.new(data)
            else
                add_node_r(head.next, data)
            end
            
        end
    end


    def add_node (data)
        if @head.nil?
            new_node = Node.new(data)
            @head = new_node
        else
            current = @head
            while !current.next.nil?
            current = current.next
            end
            current.next = Node.new(data)
        end
    end

    def reverse_list (head)
        if head.nil? || head.next.nil?
            return head
        end
        p = reverse_list(head.next)
        head.next.next = head
        head.next = nil
        return p
    end
end

linked_list1 = LinkedList.new
linked_list2 = LinkedList.new
 linked_list2.add_node(12)
 linked_list2.add_node(40)
 linked_list2.add_node(6)
 p linked_list2
 p linked_list2.reverse_list(linked_list2.head)