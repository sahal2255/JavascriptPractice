//find the maximum number in array using different methods

const arrayOfNumbers=[1,2,2,50,98,40,7,5,1]

const maxNumber=Math.max(...arrayOfNumbers)
console.log('maximum number in the array using the built in method',maxNumber)

let max = arrayOfNumbers[0];
for(let i =1;i<arrayOfNumbers.length;i++){
    if(arrayOfNumbers[i]>max){
        max=arrayOfNumbers[i];
    }
}
console.log('find the maximum number using the for loop',max)


const minimumNumber=Math.min(...arrayOfNumbers)

console.log('minimum number finding using the built in method',minimumNumber)


let min=arrayOfNumbers[1]
for(let i=1;i<arrayOfNumbers.length;i++){
    if(min>arrayOfNumbers[i]){
        min= arrayOfNumbers[i]
    }
}
console.log('minimum number finding using for loop',min)


const uniqueArray=[...new Set(arrayOfNumbers)]

console.log('unique element in aray ',uniqueArray)



const sortedBuiltIn=arrayOfNumbers.sort((a,b)=>a-b)
console.log('sorted array for using the built in method',sortedBuiltIn)

for (let i=0;i<arrayOfNumbers.length;i++){
   for(let j=0;j<arrayOfNumbers.length-i-1;j++){
    if(arrayOfNumbers[j]>arrayOfNumbers[j+1]){
        let temp=arrayOfNumbers[j]
        arrayOfNumbers[j]=arrayOfNumbers[j+1]
        arrayOfNumbers[j+1]=temp
    }
   }
}

console.log('ascending orderly sorted array',arrayOfNumbers)