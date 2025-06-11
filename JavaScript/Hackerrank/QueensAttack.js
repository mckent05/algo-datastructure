const queensAttack = (n , k, r_q, c_q, obstacles) => {
    // let visited = new Set()
    // let countMovement = 0
    // obstacles = obstacles.map((item) => {
    //     const [a, b] = item
    //     return `${a},${b}`
    // })
    // let count = 0
    // countMovement+=moveQueenDownwards(n, k, r_q, c_q - 1, obstacles, count)
    // countMovement+=moveQueenLeft(n, k, r_q - 1, c_q,obstacles , count)
    // countMovement+=moveQueenUpdawards(n, k, r_q, c_q + 1, obstacles, count)
    // countMovement+=moveQueenRight(n, k, r_q + 1, c_q, obstacles, count)
    // countMovement+=moveQueenDiagRight(n, k, r_q +1, c_q+1 , obstacles, count)
    // countMovement+=moveQueenDiagDownLeft(n, k, r_q -1, c_q-1, obstacles, count)
    // countMovement+=moveQueenDiagUpLeft(n, k, r_q -1, c_q+1, obstacles, count)
    // countMovement+=moveQueenDiagDownRight(n, k, r_q+1, c_q-1, obstacles, count)
    const obstaclesSet = new Set(obstacles.map(([a, b]) => `${a},${b}`));
    let countMovement = 0;

    // Movement directions: [rowChange, colChange]
    const directions = [
        [0, -1],   // Left
        [-1, 0],   // Up
        [0, 1],    // Right
        [1, 0],    // Down
        [1, 1],    // Down-Right
        [-1, -1],  // Up-Left
        [-1, 1],   // Up-Right
        [1, -1],   // Down-Left
    ];

    for (let [rowChange, colChange] of directions) {
        let newRow = r_q + rowChange;
        let newCol = c_q + colChange;

        while (newRow >= 1 && newRow <= n && newCol >= 1 && newCol <= n && !obstaclesSet.has(`${newRow},${newCol}`)) {
            countMovement++;
            newRow += rowChange;
            newCol += colChange;
        }
    }

    return countMovement;
    
}

// const moveQueenUpdawards = (n, k, r_q, c_q, obstacles, count) => { 
//     const rowBoundary = 1 <= r_q && r_q <= n
//     const colBoundary = 1 <= c_q && c_q <= n
//     if(!rowBoundary || !colBoundary) return count

//     const pos = `${r_q},${c_q}`
//     if(obstacles.includes(pos)) return count
//     return moveQueenUpdawards(n, k, r_q, c_q + 1, obstacles, count+1)
// }
// const moveQueenDownwards = (n, k, r_q, c_q, obstacles, count) => { 
//     const rowBoundary = 1 <= r_q && r_q <= n
//     const colBoundary = 1 <= c_q && c_q <= n
//     if(!rowBoundary || !colBoundary) return count

//     const pos = `${r_q},${c_q}`
//     if(obstacles.includes(pos)) return count
//     return moveQueenDownwards(n, k, r_q, c_q - 1, obstacles, count+1)
// }

// const  moveQueenRight = (n, k, r_q, c_q, obstacles, count) => { 
//     const rowBoundary = 1 <= r_q && r_q <= n
//     const colBoundary = 1 <= c_q && c_q <= n
//     if(!rowBoundary || !colBoundary) return count

//     const pos = `${r_q},${c_q}`
//     if(obstacles.includes(pos)) return count
//     return moveQueenRight(n, k, r_q + 1, c_q, obstacles, count+1)
// }

// const moveQueenLeft = (n, k, r_q, c_q, obstacles, count) => { 
//     const rowBoundary = 1 <= r_q && r_q <= n
//     const colBoundary = 1 <= c_q && c_q <= n
//     if(!rowBoundary || !colBoundary) return count

//     const pos = `${r_q},${c_q}`
//     if(obstacles.includes(pos)) return count
//     return moveQueenLeft(n, k, r_q - 1, c_q, obstacles, count+1)
// }

// const moveQueenDiagRight = (n, k, r_q, c_q, obstacles, count) => { 
//     const rowBoundary = 1 <= r_q && r_q <= n
//     const colBoundary = 1 <= c_q && c_q <= n
//     if(!rowBoundary || !colBoundary) return count

//     const pos = `${r_q},${c_q}`
//     if(obstacles.includes(pos)) return count
//     return moveQueenDiagRight(n, k, r_q+1, c_q + 1, obstacles, count+1)

// }
// const moveQueenDiagDownLeft = (n, k, r_q, c_q, obstacles, count) => { 
//     const rowBoundary = 1 <= r_q && r_q <= n
//     const colBoundary = 1 <= c_q && c_q <= n
//     if(!rowBoundary || !colBoundary) return count

//     const pos = `${r_q},${c_q}`
//     if(obstacles.includes(pos)) return count
//     return moveQueenDiagDownLeft(n, k, r_q - 1, c_q - 1, obstacles, count+1)
// }

// const moveQueenDiagUpLeft = (n, k, r_q, c_q, obstacles, count) => { 
//     const rowBoundary = 1 <= r_q && r_q <= n
//     const colBoundary = 1 <= c_q && c_q <= n
//     if(!rowBoundary || !colBoundary) return count

//     const pos = `${r_q},${c_q}`
//     if(obstacles.includes(pos)) return count
//     return moveQueenDiagUpLeft(n, k, r_q - 1, c_q + 1, obstacles, count+1)
// }

// const moveQueenDiagDownRight = (n, k, r_q, c_q, obstacles, count) => { 
//     const rowBoundary = 1 <= r_q && r_q <= n
//     const colBoundary = 1 <= c_q && c_q <= n
//     if(!rowBoundary || !colBoundary) return count

//     const pos = `${r_q},${c_q}`
//     if(obstacles.includes(pos)) return count
//     return moveQueenDiagDownRight(n, k, r_q + 1, c_q - 1, obstacles, count+1)
// }

// console.log(queensAttack(5, 3, 4, 3, [[5,5], [4,2], [2,3]]))
// console.log(queensAttack(1, 0, 1, 1, []))
console.log(queensAttack(100000, 0, 4187, 5068, []))

