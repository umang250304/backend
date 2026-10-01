require('dotenv').config()
const express=require('express')
const app=express()
const port=4000

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/twitter',(req,res)=>{
    res.send("umangtwitter")
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code </h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code</h2>')
})


app.get('/umang',(req,res)=>{
    res.send("hello my name is umang");
})

app.listen(process.env.port,()=>{
    console.log(`example app listening on port ${port}`);
})