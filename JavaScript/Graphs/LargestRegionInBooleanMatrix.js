// Consider a matrix, where each cell contains either a ‘0’ or a ‘1’, 
//and any cell containing a 1 is called a filled cell. 
//Two cells are said to be connected if they are adjacent to each other horizontally, 
//vertically, or diagonally. If one or more filled cells are also connected, they form a region.
//find the size of the largest region

const largestRegionDFS = (grid) => {
    const visited = new Set()
    const allRegion = []
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            let count =exploreGraph(grid, row, col, visited) //ToDo
            if(count) {
                allRegion.push(count)
            }
            
        }
    }
    return Math.max(...allRegion)

}

const exploreGraph = (grid, row, col, visited) => {
    const rowBound = 0 <= row && row < grid.length
    const colBound = 0 <= col && col < grid[0].length
    if(!rowBound  || !colBound) return 0
    
    if(!grid[row][col]) return 0

    const pos = row + ',' + col
    if(visited.has(pos)) return 0
    visited.add(pos)

    let size = 1
    size += exploreGraph(grid, row + 1, col, visited )
    size += exploreGraph(grid, row - 1, col, visited )
    size += exploreGraph(grid, row, col + 1, visited )
    size += exploreGraph(grid, row, col - 1, visited )
    size += exploreGraph(grid, row + 1, col + 1, visited )
    size += exploreGraph(grid, row - 1, col + 1, visited )
    size += exploreGraph(grid, row + 1, col - 1, visited )
    size += exploreGraph(grid, row - 1, col - 1, visited )

    return size
}
//Test case 1
const grid1 = [
[0,0,1,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,0,1,0,0,0,1,0,1,0,0],
[0,1,0,0,1,1,0,0,1,1,1,0,0],
[0,1,0,0,1,1,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,0,0,0,0,0,0,1,1,0,0,0,0]
]

const grid2 = [
     [0, 0, 1, 1, 0], 
     [1, 0, 1, 1, 0], 
     [0, 1, 0, 0, 0], 
     [0, 0, 0, 0, 1]
]

console.log(largestRegionDFS(grid1))
console.log(largestRegionDFS(grid2))