const array=[1,2,5,9,8,7]


// find the minimum element in the array using to the built in method

const min=Math.min(...array)
console.log('minimum element in the array to find the built in method',min)



// find the minimum element in the array without using the built in method

function findMin(array){

    let mn=array[0]
    for(i=0;i<array.length;i++){
        if(array[i]>=mn){
            return mn=array[i]
        }
    }
    return mn
}

console.log('minimum element find using the for loop',findMin(array))