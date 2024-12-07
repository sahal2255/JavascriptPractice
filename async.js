const fs=require('fs')
console.log('hello first line')

const filereading=fs.readFileSync('./text.txt','utf-8')
console.log('file reading :',filereading)

console.log('this is the last line ')

fs.readFile('./text.txt','utf-8',()=>{
    console.log('this is the async file reading function')
})

console.log('after async file reading')