const leaderBoard = (rank, player) => {
   
}

const findLeaderBoard = (rank, score, currentIndex, result) => {
    if(!(currentIndex >=0 && score >= rank[currentIndex])) {
        result.push(currentIndex + 2)
        
    }
    return findLeaderBoard(rank, score, currentIndex-1, result)
}

leaderBoard([100,90,90,80], [70,80,105])