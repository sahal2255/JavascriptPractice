const array=[1,2,5,9,8,7]

// find the maximum element in array using the built in methods

//  1-- using to the Math.max()  method 
const mx=Math.max(...array)
console.log('built in method using to find the maximum element in the array',mx)


// find the maximum element in array without using the built in method
function findMax(array){

    let maximum=array[0]
    for(i=1;i<array.length;i++){
        if(array[i]>maximum){
            maximum=array[i]
        }
    }
    return maximum
}
console.log('for loop using to find the maximum element ',findMax(array))