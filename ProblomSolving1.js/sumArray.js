function sum () {
    "use strict";
    
    const arr=[1,5.2,4,0,-1]
    
    if(arr.length===0){
      return 0
    }else{
      
    const result=arr.reduce((i,j)=>i+j)
    return result
    }
};

console.log(sum())