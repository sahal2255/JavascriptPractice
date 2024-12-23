const array=[10,3,13,5,1,20,6]

// smallest value found using builtin method
const smallestinbuilt=Math.min(...array)
console.log('smallest value in the builtin',smallestinbuilt)

// smallest value found without built in method
function smallestwithoutbuiltin(array){
    let smallest=array[0]
    for(let i=1;i<array.length;i++){
        if(smallest>array[i]){
            smallest=array[i]
        }
    }
    return smallest
}

console.log(smallestwithoutbuiltin(array))

// second smallest vlaue

const sortedarray=array.sort((a,b)=>a-b)
console.log('sorted array',sortedarray)
const secondSmallest=sortedarray[2-1]
console.log('second smallest',secondSmallest)