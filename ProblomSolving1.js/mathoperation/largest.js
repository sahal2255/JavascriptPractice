const array=[10,3,13,5,1,20,6]

// largest number find using built in methods 

const builtInLargest=Math.max(...array)
// console.log('largest number finding bultin method',builtInLargest)

// largest number find using without builtin method

function withoutbuiltin(array){
    let largest=array[0]
    for(let i=1;i<array.length;i++){
        if(largest<array[i]){
            largest=array[i]
        }
    }
    return largest
}
// console.log(withoutbuiltin(array))


//  second largest number in the array 

const sortedarray=array.sort((a,b)=>b-a)
console.log('sorted',sortedarray)
const secondLargest=sortedarray[2-1]
console.log(secondLargest)

