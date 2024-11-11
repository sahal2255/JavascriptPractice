function isPrime(n){
    if(n<2){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

console.log(isPrime(5))
console.log(isPrime(1))
console.log(isPrime(6))


// let numbers=[1,2,3]

// numbers[5]=6

// console.log(numbers.length)
