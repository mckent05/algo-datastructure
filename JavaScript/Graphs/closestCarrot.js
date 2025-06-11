const closestCarrot = (grid, row, col) => {
  const visited = new Set()

  let shortTestPath = Infinity

  for(let r = row; r < grid.length; r++) {
    for(let c = col; c < grid[0].length; c++) {
      if(!visited.has(`${r},${c}`)) {
       const distance = exploreRabbit(grid, r, c, visited)
       if(distance > 0) {
        if(distance < shortTestPath) {
          shortTestPath = distance
         }
       }
      }
    }
  }
  return shortTestPath
}

const exploreRabbit = (grid, r, c, visited) => {
  const rowBoundary = 0 <= r && r < grid.length
  const colBoundary = 0 <= c && c < grid[0].length

  if(!rowBoundary || !colBoundary) {
    return 0
  }
  const queue = [ [ r, c, 0 ] ]

  while(queue.length > 0) {
    const currentNode = queue.shift()
    const [row, col, distance] = currentNode

    const pos = `${r},${c}`
    if(visited.has(pos)) return 0
    visited.add(pos)

    if(grid[row][col] === "C") {
      return distance
    }

    queue.push( [row, col + 1, distance + 1])
  }
}

console.log(closestCarrot(
  [['O', 'O', 'X', 'C'],
  ['O', 'X', 'O', 'O'],
  ['C', 'O', 'O', 'O']], 0, 0))