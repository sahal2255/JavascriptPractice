const express=require('express')


const app=express()

function oddOrEven(array) {
  //enter code here
  const val=array.reduce((sum,cur)=>{
    return sum+cur
  })
  if(val%2===0){
    return 'even'
  }
  else{
    return 'odd'
  }
 
}
console.log(oddOrEven([0,1,2,2]))





app.listen(3000,()=>{
    console.log('sever running ')
})