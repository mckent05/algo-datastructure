const snakesAndLadder = (ladders, snakes) => {
    const snakeGraph = buildGraph(snakes) // ToDo
    const visited = new Set([ 1 ])
    const ladderGraph = buildGraph(ladders)
    const queue = [ [1, 0]]
    while(queue.length > 0) {
       const [startNode, noOfrolls] = queue.shift()
       if(startNode === 100) return noOfrolls
        for( let j = 1; j <= 6; j++) { 
            let newposition = startNode + j
            if(startNode <= 100 && !(visited.has(newposition))) {
                visited.add(newposition)
                if(newposition in snakeGraph) {
                    queue.push([snakeGraph[newposition], noOfrolls + 1])
                }
                if(newposition in ladderGraph) {
                    queue.push([ladderGraph[newposition], noOfrolls + 1])
                }
                if(!(newposition in ladderGraph) && !(newposition in snakeGraph)) {
                    queue.push([newposition, noOfrolls + 1])
                }
            }
           
        }
    }
    return -1
}

const buildGraph = (arrays) => {
    const graph = {}
    for (let array of arrays) {
        const [a, b] = array
        if(!(a in graph)) graph[a] = b
    }
    return graph
}

console.log(snakesAndLadder([[2,100]], 
    [[99,10], [97,20], [98,30], [96,40], [95,50], [94,60],[93,70]]))
