const express = require('express');
const app = express();
const port = process.env.port || 4001 ;

app.use(express.json())


app.get('/',(req,res)=>{
    res.send("this is the message to you that you are at the port.")
})

app.listen(port,()=>{console.log(`server started at port ${port}`)})

