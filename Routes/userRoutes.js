
const express=require('express')
const router=express.Router()

const user=require('../models/userSchema')

 //  POST :  ADD A NEW USER TO THE DATABASE //
router.post('/newuser',(req,res)=>{
    let newuser= new user (req.body)
    newuser.save((err,data)=>{
        err ? console.log(err) : res.send('user was added')
    })
})



  //GET :  RETURN ALL USERS //
router.get('/',(req,res)=>{
    user.find({},(err,data) =>{
        err ? console.log(err) : res.json(data)  
    })
})

    

     //  PUT : EDIT A USER BY ID //
     router.get('/:id', (req, res) => {
      user.findByIdAndUpdate( {_id:req.params.id},{firstname:"Amine"} ,(err, data) => {
                    err ? console.log(err) : res.json({ data })
            
        })
        })

     //  DELETE : REMOVE A USER BY ID //
     router.delete('/:id',(req,res)=>{
       user.findByIdAndRemove({_id:req.params.id},(err,data)=>{
            err ? console.log(err) : res.send('user was deleted')
        })
    })
     
     module.exports=router