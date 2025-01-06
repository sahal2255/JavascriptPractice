const { error } = require('console')
const fs= require('fs')
const content='This command is generated Write file function'
fs.writeFile('fileRead.txt',content,'utf-8',(error)=>{
    if(error){
        return
    }
    console.log('write file is success')
})