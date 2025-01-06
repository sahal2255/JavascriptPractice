const { error } = require('console')
const fs=require('fs')

fs.readFile('fileRead.txt','utf-8',(error,data)=>{
    if(error){
        console.log('error in to the read file ',error)
    }
    console.log(data) 
})
