const graph = [
    ["W", "L", "L", "W"],
    ["W", "L", "W", "L"],
    ["W", "L", "W", "L"],
    ["W", "W", "L", "W"],
    ["W", "L", "L", "W"],
    ["W", "W", "L", "W"],
]

const graphImplement = (graph) => {
    let visited = new Set()
    let myArray = []
    let size;
    for(let i = 0; i < graph.length; i++) {
        for(let j = 0; j < graph[0].length; j++){
            size = navigateGraph(graph, i, j, visited)
            if(size) {
                myArray.push(size)
            }
        }
    }
    // for(let node in graph) {
    //     size = navigateGraph(graph, node, visited)
    //     if(size) {
    //         myArray.push(size)
    //     }
    // }
    return myArray
}

const navigateGraph = (graph, row, col, visited, countNode=1) => {
    const rowBound = 0 <= row && row < graph.length
    const colBound = 0 <= col && col < graph[0].length
    if(!rowBound || !colBound) return 0

    if(graph[row][col] === "W") return 0

    const pos = `${row},${col}`
    if(visited.has(pos)) return 0
    visited.add(pos)
    navigateGraph(graph, row +1, col, visited, countNode+=1)
    navigateGraph(graph, row-1, col, visited, countNode+=1)
    navigateGraph(graph, row, col +1, visited, countNode+=1)
    navigateGraph(graph, row, col-1, visited, countNode+=1)
    return countNode

}
console.log(graphImplement(graph))