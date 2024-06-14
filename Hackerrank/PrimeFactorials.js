const isPrime = (number) => {
    const numberRoot = Math.floor(Math.sqrt(number))
    for(let i = 2; i <= numberRoot; i++) {
        if( number % i === 0) {
            return false
        }
    }
    return true
}

const primeFactorials = (number) => {
    while(!isPrime(number)) {
        let primeSum = 0
        let divisor = 2
        while(number > 1) {
            if(isPrime(divisor)) {
                if(number % divisor === 0) {
                    number /= divisor
                    primeSum += divisor
                }
                else {
                    divisor +=1
                }
            }
            else {
                divisor += 1
            }
        }
        number = primeSum
    }
    return number
}

console.log(primeFactorials(256))