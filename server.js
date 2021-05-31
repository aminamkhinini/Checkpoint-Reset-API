const express=require('express')
const app= express()


// create database with server
let mongoose=require('mongoose')
require('dotenv').config({path:"./config/.env"})

// install and setting mongoose
    mongoose.connect(process.env.MONGO_URI,{ useUnifiedTopology: true, useNewUrlParser: true,useFindAndModify:false},(err)=>{
        
        err ? console.log(err) : console.log('database connected')
    })


//parse the data
app.use(express.json())

app.use('/users', require('./Routes/userRoutes'))

const port=5000
app.listen(port,(err)=>{
    err ? console.log(err) : console.log('the server is running on port 5000')
})

