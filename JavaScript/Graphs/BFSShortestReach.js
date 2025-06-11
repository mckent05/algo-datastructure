const bfsShortestSearch = (n, array, m, s) => {
    const graph = buildGraph(array) //ToDo
    const visited = Array(n + 1).fill(-1)
    visited[s] = 0

    const queue = [[s, 0]]

    const array2 = []

    while(queue.length) {
        const [current, distance] = queue.shift()

        for( let nodes of graph[current]) {
            if(visited[nodes] === -1) {
                visited[nodes] = distance + 6
                queue.push([nodes, distance + 6])
                
            }  
        }
    }
  for(i=1; i <= n ; i++) {
    if(i !== s) {
        array2.push(visited[i])
    }
    
  }
    return array2
}


const buildGraph = (array) => {
    const graph = {}
    for(let items of array) {
        const [a, b] = items
        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}

console.log(buildGraph([[1,2], [1,3], [3,4]]))
console.log(bfsShortestSearch(3, [[2,3]], 3, 2))