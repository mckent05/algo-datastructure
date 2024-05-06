const mergeSortedLinkedList = (listA, listB) => {
    if(listA === null) {
        return listB
    }
    if(listB === null) {
        return listA
    }

    if(listA.data < listB.data) {
        listA.next = mergeSortedLinkedList(listA.next, listB)
        return listA
    }

    if(listB.data < listA.data) {
        listB.next = mergeSortedLinkedList(listA, listB.next)
        return listB
    }
    
}

let node1 =  {
    data: 1,
    next:  { data: 3, next:  { data: 5, next: {
        data: 7, next: null 
    } } }
  }

  let node2 =  {
    data: 2,
    next:  { data: 4, next:  { data: 6, next: {
        data: 8, next: null 
    } } }
  }

  console.log(mergeSortedLinkedList(node1, node2))