const express = require("express")
require('dotenv').config()
const app = express()
const port = 4000
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/home',(req,res)=>{
    const myObj ={
        name:"manish sharma",
        mobileNumber:"9368143926",
    }
    res.send(myObj)
})
app.get('/login',(req,res)=>{
    res.send('<h1> WelCome to My Page</h1>')
})
app.get('/instagram',(req,res)=>{
    res.send("instagram")

})

app.listen(process.env.PORT, ()=>{
   console.log(`listen this port ${port}`)
})
