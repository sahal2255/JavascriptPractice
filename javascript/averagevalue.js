const array=[1,2,5,8,6,3]

function totalAvg(arr){
    const total=arr.reduce((acc,cur)=>{
        return acc+=cur
    },0)
    return total/arr.length
}
console.log(totalAvg(array))

function avg(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum/arr.length
}
console.log(avg(array))