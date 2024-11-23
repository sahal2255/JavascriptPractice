const http=require('http')

const port =5222
const server=http.createServer(
    console.log('server creattion phase')
)
server.listen(port,()=>{
    console.log('server running without the express frame work')
})