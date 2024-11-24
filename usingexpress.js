const express=require('express')
const path=require('path')
const fs=require('fs')

const app=express()
const filePath=path.join(__dirname,'data.json')

app.use(express.json())

app.get('/read',(req,res)=>{
    fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err){
            console.log('eroror in ')
            res.status(400).json({message:"error "})
        }
        const jsondata=JSON.parse(data)
        console.log(jsondata)
        res.status(200).json(jsondata)
    })
})

app.post('/createuser',(req,res)=>{
    
})
app.listen(2222,()=>{
    console.log(`servier with express http://localhost:2222`)
})

