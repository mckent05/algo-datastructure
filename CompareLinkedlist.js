const compareList = (A, B) => {
    if(A === null || B === null) {
        return A===B
    }
    if(A.data === B.data) {
       return compareList(A.next, B.next)
    }
    return false
}

let node1 =  {
    data: 1,
    next:  { data: 2, next:  { data: 3, next: {
        data: 4, next: null 
    } } }
  }

  let node2 =  {
    data: 1,
    next:  { data: 2, next:  { data: 3, next: {
        data: 4, next: null 
    } } }
  }

  console.log(compareList(node1, node2))