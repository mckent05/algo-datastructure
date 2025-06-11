require 'set'
graph = {
  0 => [8, 1, 5],
  1 => [ 0 ],
  5 => [0, 8],
  8 => [0, 5],
  2 => [3, 4],
  3 => [2, 4],
  4 => [3, 2]
}
#Largest component solution
def largest_component(graph) 
  visited_nodes = Set.new

  largest_size = 0

  graph.each_key do |key|
    unless visited_nodes.include?(key)
      size = explore_size(graph, key, visited_nodes)
      largest_size = size if size > largest_size 
    end
  end
  largest_size
end

# Explore size using BFS iteration

def explore_size(graph, node, visited)
  queue = [ node ]

  size = 0

  until queue.empty?
    curr_ele = queue.shift()
    next if visited.include?(curr_ele)

    visited.add(curr_ele)
    size +=1

    graph[curr_ele].each do |neighbor|
      queue << neighbor
    end
  end
 
  size
end

# Explore size using recursive DFS
# def explore_size(graph, node, visited)
#   return 0 if visited.include?(node)

#   visited.add(node)

#   size = 1

#   graph[node].each do |neighbor|
#     size += explore_size(graph, neighbor, visited)
#   end

#   size
# end

p largest_component(graph)
