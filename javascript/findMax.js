const array=[3,4,5,6,7,2]
function findMax(arr){
    let max=arr[0]
    for(let i=1;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    return max
}
console.log(findMax(array))
function findMin(arr){
    let min=arr[0]
    for(let i=1;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i]
        }
    }
    return min
}
console.log(findMin(array))