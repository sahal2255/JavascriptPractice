const array=[1,2,3,5,6,8,3,4,2,1]

const unique=[...new Set(array)]
console.log('unique',unique)

function findUnique(arr){
    let uq=[]
    let no=[]
    for(let i=0;i<arr.length;i++){
        if(i==!arr[i]){
            uq.push(arr[i])
        }
        return no.push(i)
    }
    return uq
}
console.log(findUnique(array))