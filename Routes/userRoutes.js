
const express=require('express')
const router=express.Router()

const user=require('../models/userSchema')

 //  POST :  ADD A NEW USER TO THE DATABASE //
router.post('/newuser',(req,res)=>{
    let newUser= new User (req.body)
    newUser.save((err,data)=>{
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
     router.get('/Imen/:id', (req, res) => {
        person.findById( {_id:req.params.id}, (err, data) => {
            data.firstname.push("Amine");
            data.save(err ? console.log(err) : res.json({ data })
            );
        })
        })

     //  DELETE : REMOVE A USER BY ID //
     router.delete('/:id',(req,res)=>{
        person.findByIdAndRemove({_id:req.params.id},(err,data)=>{
            err ? console.log(err) : res.json(data)
        })
    })
     
     module.exports=router