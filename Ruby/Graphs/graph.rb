require 'set'

# # Depth first graph traversal(iterative)
# def df_graph_traversal(source, graph)
#   stack = [ source ]

#   while(stack.length > 0 )
#     current_ele = stack.pop()
#     p current_ele

#     graph[current_ele.to_sym].each do |node|
#       stack.push(node)
#     end
#   end
# end

# # Depth first graph traversal(recursive)
# def df_graph_traversal_recursive(source, graph)
#   p source

#   graph[source.to_sym].each do |node|
#     df_graph_traversal_recursive(node, graph)
#   end
# end

# # Breadhth first graph traversal(iterative)
# def bfs_graph_traversal(source, graph)
#   queue = [ source ]

#   while(queue.length > 0 )
#     current_ele = queue.shift()
#     p current_ele

#     graph[current_ele.to_sym].each do |node|
#       queue.push(node)
#     end
#   end
# end

# graph ={
#   a: ["c", "b"],
#   b: ["d"],
#   c: ["e"],
#   d: ["f"],
#   e: [],
#   f: []
# }
# bfs_graph_traversal("a", graph)

graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
}

# # Check if the dst node can be reached from source(DF)
# def can_reach_dst(graph, source, dst)
#   return true if source == dst

#   graph[source.to_sym].each do |node|
#     return true if can_reach_dst(graph, node, dst)
#   end
#   false
# end

# # Check if the dst node can be reached from source(BF)
# def can_reach_dst_bf(graph, source, dst)
#   queue = [ source ]

#   while queue.length > 0 
#     const current_ele = queue.pop()
#     return true if current_ele == dst

#     graph[current_ele.to_sym].each do |node|
#       queue << node
#     end    
#   end

#   false
# end

# p can_reach_dst(graph, "f", "j")

edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"]
]

# Build graph from the given edges
def build_graph(edges)
  edges.each_with_object({}) do |(a, b), graph|
    graph[a] ||= []
    graph[b] ||= []

    graph[a] << b
    graph[b] << a
  end
end

# # Recursive solution(DFS) Unidirection
# def check_nodes(edges, node_a, node_b)
#   graph = build_graph(edges)

#   has_path(graph, node_a, node_b, Set.new)
# end

# def has_path(graph, start, dst, visited)
#   return true if start == dst

#   return false if visited.include?(start)

#   visited.add(start)

#   graph[start].each do |node|
#     return true if has_path(graph, node, dst, visited)
#   end

#   false
# end

# # Iterative solution unidirection graph DFS
# def check_nodes(edges, node_a, node_b)
#   visited = Set.new

#   graph = build_graph(edges)

#   stack = [ node_a ]

#   until stack.empty?
#     current_ele = stack.pop()

#    return true if current_ele == node_b

#    next if visited.include?(current_ele)

#    visited.add(current_ele)
#     graph[current_ele].each do |node|
#       stack << node
#     end
#   end
#   false
# end


# Iterative solution unidirection graph BFS
# def check_nodes(edges, node_a, node_b)
#   visited = Set.new

#   graph = build_graph(edges)

#   queue = [ node_a ]

#   until queue.empty?
#     current_ele = queue.shift

#    return true if current_ele == node_b

#    next if visited.include?(current_ele)

#    visited.add(current_ele)
#     graph[current_ele].each do |node|
#       queue << node
#     end
#   end
#   false
# end

#Check the number of connected nodes
def check_connected_nodes(edges)
  graph = build_graph(edges)

  visited_nodes = Set.new

  count_node = 0
  p graph

  graph.each do |node, _value|
    # count_node +=1 if traverse_node(graph, node, visited_nodes) This solution implement the recursive algorithm below
    unless visited_nodes.include?(node)
      count_node +=1 if traverse_node(graph, node, visited_nodes) #This solution implement the BFS algorithm below
    end
    
  end

  count_node
end

#check connected using BFS iterative queue
def traverse_node(graph, curr_node, visited)

  queue = [ curr_node ]

  until queue.empty?
    curr_ele = queue.shift()

    next if visited.include?(curr_ele)

    visited.add(curr_ele)
    graph[curr_ele].each do |node|
      queue.push(node)
    end
  end
  true
end

# # Check connected node using DFS recursive
# def traverse_node(graph, curr_node, visited)
#   return false if visited.include?(curr_node)

#   visited.add(curr_node)

#   graph[curr_node].each do |node|
#     traverse_node(graph, node, visited)
#   end
#   true
# end
p check_connected_nodes(edges)