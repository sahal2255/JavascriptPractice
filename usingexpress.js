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

app.post('/createuser', (req, res) => {
    const newUser = req.body; 
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log('Error reading file:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            try {
                const jsonData = JSON.parse(data); 
                jsonData.push(newUser);
                fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (writeError) => {
                    if (writeError) {
                        console.log('Error writing to file:', writeError);
                        return res.status(500).json({ message: 'Error writing to file' });
                    }

                    res.status(201).json({ message: 'User created successfully', newUser });
                });

            } catch (parseError) {
                console.log('Error parsing JSON:', parseError);
                res.status(500).json({ message: 'Error parsing JSON data' });
            }
        });
    } else {
        const newData = [newUser];

        fs.writeFile(filePath, JSON.stringify(newData, null, 2), (err) => {
            if (err) {
                console.log('Error writing to file:', err);
                return res.status(500).json({ message: 'Error writing to file' });
            }

            res.status(201).json({ message: 'User created successfully', newUser });
        });
    }
});
app.listen(2222,()=>{
    console.log(`servier with express http://localhost:2222`)
})

