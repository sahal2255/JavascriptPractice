function factorial(n){
    let val=1
    for(i=2;i<=n;i++){
        val=val*i
    }
    return val;
}

console.log(factorial(5))


function fibnocciSeries(n){
    let series=[0,1]
    for(let i=2;i<n;i++){
        series[i]=series[i-1]+series[i-2]
    }
    return series
}
console.log(fibnocciSeries(5))

 
var uniqueInOrder=function(iterable){
    let newArray=[]
    const sp=iterable.split('')
    for(let i=0;i<sp.length;i++){
        if(sp[i]!==sp[i-1]){
            newArray.push(sp[i])
        }
    }
    return newArray
  }
console.log(uniqueInOrder('AAAABBBCCDAABBB'))

