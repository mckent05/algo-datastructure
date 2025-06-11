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

