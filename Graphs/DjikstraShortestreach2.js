const djisktraShortestReach = (n, array, s) => {
    const graph = buildGraph(array)
    s = String(s)
    const visited = { s: 0 }
    const queue = [ [s, 0 ] ]
    const array2 = []

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
    for(i = 1; i <= n; i++) {
        if( i == s) continue
        array2.push(( i in visited) ? visited[i] : -1)
    }
    console.log(visited)
    return array2

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
    return graph
}

console.log(djisktraShortestReach(4, [[1,2,24], [1,4,20], [3,1,3],[4,3,12]], 1))