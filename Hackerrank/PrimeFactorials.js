const isPrime = (number) => {
    const numberRoot = Math.floor(Math.sqrt(number))
    for(let i = 2; i <= numberRoot; i++) {
        if( number % i === 0) {
            return false
        }
    }
    return true
}

