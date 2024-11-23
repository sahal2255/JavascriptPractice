const array=[1,2,3,4,5]

// find the odd number using the inbuilt method
let odd=array.filter(item=>item%2!==0)
console.log('odd number is',odd)
let even=array.filter(item=>item%2===0)
console.log('evend number is',even)


// find the odd number using the for loop
function foundOddOrEven(array){
let oddNumber=[]
let evenNumber=[]
    for(let i=1;i<=array.length;i++){
        if(i%2!==0){
             oddNumber.push(i)
        }else{
             evenNumber.push(i)
        }
    }
    console.log('odd number using to the for loop',oddNumber)
    console.log('even number using to the for loop',evenNumber)
}
foundOddOrEven(array)