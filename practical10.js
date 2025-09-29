  
const express=require('express');
const app=express();
const fs=require('fs');
app.get('/',(req,res)=>{
    res.send("Welcome to our site")
})
app.get('/about',(req,res)=>{
    fs.readFile('first.txt','utf-8',(err,data)=>{
        if(err){
            return res.send("Error: cannot read the file.");
        }
        res.send(`<pre>${data}</pre>`);
    })
})
app.listen(3000,()=>{
    console.log(`server running on port 3000`)
})


