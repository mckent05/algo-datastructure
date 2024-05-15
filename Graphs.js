const graph = {
    a: ["b", "c", "d"],
    b: ["a", "c"],
    c: ["a", "d"],
    d: ["a", "c"],
    e: ["f"],
    f: ["e"],
    g: []
}

const graphImplement = (graph) => {
    let visited = new Set()
    let myArray = []
    let size;
    for(let node in graph) {
        size = navigateGraph(graph, node, visited)
        if(size) {
            myArray.push(size)
        }
    }
    return myArray
}

const navigateGraph = (graph, current, visited, countNode=1) => {
    if(visited.has(current)) return 0
    visited.add(current)
    for(let neigbors of graph[current]) {
        navigateGraph(graph, neigbors, visited, countNode++)
    }
    return countNode

}
console.log(graphImplement(graph))