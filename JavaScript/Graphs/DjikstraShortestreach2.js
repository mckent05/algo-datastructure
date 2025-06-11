// const djisktraShortestReach = (n, array, s) => {
//     const graph = buildGraph(array)
//     s = String(s)
//     const visited = { s: 0 }
//     const queue = [ [s, 0 ] ]
//     const array2 = []

//     while(queue.length > 0 ) {
//         const [startNode, distance] = queue.shift()
//         for(let nodes of graph[startNode]) {
//             const [nextNode, distanceNextNode] = nodes
//             if(!(nextNode in visited)) {
//                 visited[nextNode] = distance + distanceNextNode
//                 queue.push([ nextNode, distance + distanceNextNode ])
//             }
//             else {
//                 visited[nextNode] = (distance + distanceNextNode) < visited[nextNode] ?
//                     distance + distanceNextNode : visited[nextNode]
//             }
//         }
//     }
//     for(i = 1; i <= n; i++) {
//         if( i == s) continue
//         array2.push(( i in visited) ? visited[i] : -1)
//     }
//     console.log(visited)
//     return array2

// }

// const buildGraph = (array) => {
//     const graph = {}
//     for( let item of array) {
//         const [a, b, c] = item
//         if(!(a in graph)) graph[a] = []
//         if(!(b in graph)) graph[b] = []
//         graph[a].push([String(b),c])
//         graph[b].push([String(a),c])

//     }
//     return graph
// }

// console.log(djisktraShortestReach(4, [[1,2,24], [1,4,20], [3,1,3],[4,3,12]], 1))

//Shortest Path in a Weighted Graph (Dijkstra’s Algorithm)

// Problem: You are given a weighted directed graph with n nodes labeled from 0 to n-1, 
// and an array of edges where edges[i] = [from_i, to_i, weight_i] 
// represents a directed edge from node from_i to node to_i with weight weight_i. 
// Find the shortest path from a source node src to all other nodes. 
// Return an array of distances where dist[i] is the shortest distance from src to node i, or -1 if no path exists.

// Input:
// n: integer, number of nodes (1 <= n <= 100)
// edges: list of [from, to, weight] where 0 <= from, to < n, 1 <= weight <= 10^4
// src: integer, source node (0 <= src < n)

// Output: An array of integers representing the shortest distance from src to each node.

// Example:
// Input: n = 4, edges = [[0,1,1],[0,2,5],[1,2,1],[2,3,1]], src = 0
// Output: [0,1,2,3]
// Explanation: Shortest paths from node 0 are: 0->1 (1), 0->1->2 (2), 0->1->2->3 (3).

// Constraints:
// The graph has no negative weights.
// The graph may not be connected.

const djisktraShortestReach = (edges, startNode) => {
    const graph = buildGraph(edges)
    const distances = {}
    const visited = new Set()

    for(key in graph) {
        distances[key] = Infinity
    }

    distances[startNode] = 0

    const queue = [ [String(startNode), 0] ]

    while(queue.length > 0) {
        const [ currentNode, distance ] = queue.shift()
        if(visited.has(currentNode)) continue
        visited.add(currentNode)

        graph[currentNode].forEach((neigbhor) => {
            const [ neigbhorNode, neigbhorDistance] = neigbhor
            const newDistance = distance + neigbhorDistance

            if(newDistance < distances[neigbhorNode]) {
                distances[neigbhorNode] = newDistance
                queue.push([neigbhorNode, newDistance])
            }
        })
    }

    return  distances
}

const buildGraph = (edges) => {
    const graph = {}

    for (let edge of edges) {
        const [a, b, c] = edge

        if(!graph[a]) graph[a] = []
        if(!graph[b]) graph[b] = []
        graph[a].push([String(b), c])
        graph[b].push([String(a), c])
    }
    return graph
}

console.log(djisktraShortestReach([[0,1,1],[0,2,5],[1,2,1],[2,3,1]], 0))