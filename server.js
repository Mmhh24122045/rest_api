const express = require ('express');
// const { connect } = require('mongoose');
const User = require('./models/User');
const connectDB = require('./config/contactDB');
require("dotenv").config({path:"./config/.env"})

var app = express()

app.use(express.json())

connectDB()

app.post('/add',async(req,res)=> {
    const {name,email,phone} = req.body
    try {
    const newUser = new User({
        name,
        email,
        phone
    })
    await newUser.save();
    res.send(newUser)

    } catch (error) {
        console.log(error)
        
    }
})
app.get('/get',async(req,res)=> {
    const users = await User.find()
    res.send(users)
})

app.get('/get/:id',async (req,res) => {
    const user = await User.findById(req.params.id)
    res.send(user)
})

app.put('/update/:id',async(req,res)=> {
    try {
        const updUser = await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
       res.send(updUser) 
    } catch (error) {
        console.log(error)
        
    }
})

app.delete('/delete/:id',async(req,res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.send('user deleted')
        
    } catch (error) {
        console.log(error)
        
    }
})

var PORT = process.env.PORT || 5000;

app.listen(PORT,(err) => 
err ? console.error(err) : console.log(`server is running on port ${PORT}`))
