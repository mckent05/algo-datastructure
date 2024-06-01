const recursiveDigitSum = (n, k) => {
    if(parseInt(n) < 10 ) {
        return n
    }
    let newNumber = n.split("").reduce((acc, value) => (acc += parseInt(value)), 0) * k
    return recursiveDigitSum(newNumber.toString(), 1)
    
}



console.log(recursiveDigitSum("148", 3))
