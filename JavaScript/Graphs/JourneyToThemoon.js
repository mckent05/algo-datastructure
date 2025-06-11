// const journeyToTheMoon = (astronout, number) => {
//     let restricted = new Set()
//     let visited = new Set()
//     for(let p of astronout) {
//         [a, b] = p
//         restricted.add([a, b].join(','))
//         restricted.add([b, a].join(','))
//     }
//     for( let i = 0; i < number; i++) {
//         for( let j = 0; j < number; j++) {
//             checkMe(i, j, restricted, visited)
//         }
//     }

//     console.log(visited)
//     console.log(restricted)
// }

// const checkMe = (row, col,forbidden, visted) => {
//     if(row===col) return false
//     if(forbidden.has([row,col].join(','))) return false
//     if(!(visted.has([row, col].join(',')) || visted.has([col,row].join(',')))) {
//         visted.add([row, col].join(','))
//     }
    
// }

// const navigateGraph = (graph, current, visited) => {
//     if(visited.has([current])) return
//     visited.add(current)
//     for(let me in graph[current]) {
//         navigateGraph(graph, me, visited)
//     }
// }


// console.log(journeyToTheMoon([[1,2], [2,3]], 4))

const edges = [[0, 1], [2, 3], [0, 4]];

function buildAdjacencyList(edges) {
    const adjacencyList = new Map();
    
    // Iterate through each edge
    edges.forEach(edge => {
        const [node1, node2] = edge;
        
        // Add node2 to the adjacency list of node1
        if (adjacencyList.has(node1)) {
            adjacencyList.get(node1).push(node2);
        } else {
            adjacencyList.set(node1, [node2]);
        }
        
        // Add node1 to the adjacency list of node2
        if (adjacencyList.has(node2)) {
            adjacencyList.get(node2).push(node1);
        } else {
            adjacencyList.set(node2, [node1]);
        }
    });
    
    return adjacencyList;
}

const adjacencyList = buildAdjacencyList(edges);
console.log(adjacencyList);