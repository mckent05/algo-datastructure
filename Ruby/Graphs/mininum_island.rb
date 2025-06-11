# Write a function, minimumIsland, that takes in a grid containing Ws and Ls. 
# W represents water and L represents land. The function should return the size of the smallest island. 
# An island is a vertically or horizontally connected region of land

require 'set'

grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]; # answer => 2

grid2 = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
]; # answer => 1

# recursive solution using DFS
# def mininum_island(grid)
#   visited_island = Set.new()

#   minimum_island = Float::INFINITY

#   (0...grid.length).each do |row|
#     (0...grid[0].length).each do |col|
#       size = explore_island_size(grid, row, col, visited_island)
#       minimum_island = size if size > 0 && size < minimum_island
#     end
#   end
#   minimum_island
# end

# def explore_island_size(grid, row, col, visited)
#   row_boundaries = 0 <= row && row < grid.length
#   col_boundaries = 0 <= col && col < grid[0].length

#  if !row_boundaries || !col_boundaries
#   return 0
#  end

#   return 0 if grid[row][col] == "W"

#   pos = "#{row},#{col}"

#   return 0 if visited.include?(pos)

#   visited.add(pos)

#   size = 1
  
#   size += explore_island_size(grid, row + 1, col, visited)
#   size += explore_island_size(grid, row - 1, col, visited)
#   size += explore_island_size(grid, row, col + 1, visited)
#   size += explore_island_size(grid, row, col - 1, visited)

#   size
# end

def minimum_island_bfs(grid)
  visited_island = Set.new()

  minimum_island = Float::INFINITY

  (0...grid.length).each do |row|
    (0...grid[0].length).each do |col|
      unless visited_island.include?("#{row},#{col}")
        size = explore_island_size_bfs(grid, row, col, visited_island)
        minimum_island = size if size > 0 && size < minimum_island
      end
    end
  end
  minimum_island
end

def explore_island_size_bfs(grid, row, col, visited)
  return 0 if grid[row][col] == "W"
  queue = [ [ row, col ] ]

  visited.add("#{row},#{col}")

  size = 0

  until queue.empty?
    row, col = queue.shift()

    size += 1

    neighbors = [
      [ row + 1, col ],
      [ row - 1, col ],
      [ row, col + 1 ],
      [ row, col - 1 ]
    ]

    neighbors.each do |r, c|
      pos = "#{r},#{c}"
      row_boundaries = 0 <= r && r < grid.length
      col_boundaries = 0 <= c && c < grid[0].length

      if (row_boundaries && col_boundaries)
        if grid[r][c] == "L" && !visited.include?(pos)
          visited.add(pos)
          queue.push([r, c])
        end
      end
    end
  end
  size
end

p  minimum_island_bfs(grid)
