const largestCities = (n, cities, c_road, c_library) => {
    const libInAllCities = n * c_library

    let myArray = []
    let visited = new Set()
    let connectedCities = 0

    const adjGraph = buildGraph(cities) // ToDo
    for( let current in adjGraph) {
        let countConnectedCities = migrateGraph(adjGraph, current, visited) // Todo
        if(countConnectedCities) {
            connectedCities += countConnectedCities
            myArray.push(countConnectedCities - 1)
        }
    }
    let totalRoads = myArray.reduce((acc, valu) => acc + valu, 0)
    let buildRoadAndCites = (myArray.length * c_library) + 
    (totalRoads * c_road) + ((n - connectedCities) * c_library)
    return libInAllCities < buildRoadAndCites ? libInAllCities : buildRoadAndCites
}

const migrateGraph = (graph, current, visited) => {
    if(visited.has(current)) return 0
    visited.add(current)
    
    let size = 1
    for(let city of graph[current]) {
        size +=migrateGraph(graph, city, visited)
    }

    return size
}


const buildGraph = (cities) => {
    const graph = {}
    for (let city of cities) {
        const [a, b] = city
        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []
        graph[a].push(String(b))
        graph[b].push(String(a))
    }
    return graph
}

console.log(largestCities(7,[[1,7], [1,3], [1,2],[2,3],[5,6],[6,8]],2,3))
console.log(largestCities(6,[[1,3], [3,4], [2,4],[1,2],[2,3],[5,6]],5,2))
console.log(largestCities(5, [[1,2], [1,3], [1,4]],1,6))