
`fibnocci sequence is the sequence of numbers in which each number in the sequnce is the sum of the two number before it`

function fibnocci(n){
    let fib=[0,1]
    for(i=2;i<n;i++){
       fib[i]= fib[i-1]+fib[i-2]
    }
    return fib
}


console.log(fibnocci(4))