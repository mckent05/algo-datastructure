const djisktraShortestReach = (n, array, start) => {
    const graph = buildGraph(array)
    start = String(start)
    const visited = { start: 0 }
    const queue = [ [start, 0 ] ]

    while(queue.length > 0 ) {
        const [startNode, distance] = queue.shift()
        for(let nodes of graph[startNode]) {
            const [nextNode, distanceNextNode] = nodes
            if(!(nextNode in visited)) {
                visited[nextNode] = distance + distanceNextNode
                queue.push([ nextNode, distance + distanceNextNode ])
            }
            else {
                visited[nextNode] = (distance + distanceNextNode) < visited[nextNode] ?
                    distance + distanceNextNode : visited[nextNode]
            }
        }
    }
    console.log(visited)

}

const buildGraph = (array) => {
    const graph = {}
    for( let item of array) {
        const [a, b, c] = item
        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []
        graph[a].push([String(b),c])
        graph[b].push([String(a),c])

    }
    console.log(graph)
    return graph
}

console.log(djisktraShortestReach(5, [[1,2,24], [1,4,20], [3,1,3],[4,3,12]], 1))