const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./userSchema');//usersCollection is the name of collection through which data will save in the database
const database = require('./database');
const config = require('./config');
const userSchema = require('./userSchema');
const port = process.env.PORT || 9000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//health check
app.get('/',(req,res)=>{
    res.status(200).send(`yes i'm working with the right way`);
})

//get all user
app.get('/users',(req,res)=>{
    User.find({},(err,result)=>{
        if(err) throw err;
        res.status(200).send(result);
    })
})

//register a user;
app.post('/register',(req,res)=>{
    let hashpaasword = bcrypt.hashSync(req.body.password)
    User.create({
        name:req.body.name,
        password:hashpaasword,
        email:req.body.email,
        role:req.body.role?req.body.role:"User",
        isActivate:req.body.isActivate?req.body.isActivate:true
    },(err,user)=>{
        if (err) throw err;
        res.status(200).send("Registed Successfully");
    })
})

//login to the data

//first taking token
app.post('/login',(req,res)=>{
    User.findOne({email:req.body.email},(err,data)=>{
        if(err) return res.status(500).send("server error");
        if(!data) return res.status(400).send("No user found with such info");
        else{
            const passwordValidity = bcrypt.compareSync(req.body.password,data.password)
            if(!passwordValidity) return res.status(401).send("Incorrect Password")
            let token = jwt.sign({id:data._id},config.secret,{expiresIn:86400})
            return res.status(200).send({auth:true,token:token});
        }
    })
})

//use of token to get user info;
app.get('/userInfo',(req,res)=>{
    let token = req.headers['access-token']
    if(!token) res.send({auth:false,token:"No token provided"});
    jwt.verify(token,config.secret,(err,data)=>{
        if (err) res.send({auth:false,token:"invalid token"})
        User.findById(data.id,{password:0},(err,result)=>{
            if(err) res.status(400).send("Somthing is wrong please try after some time");
            res.status(200).send(result);
        })
    })
})




//edit some detail     *****This is not  working
// app.put('/editUser',(req,res)=>{
//     let token = req.headers['access-token']
//     if(!token) res.send({auth:false,token:"No token provided"})
//     jwt.verify(token,config.secret,(err,data)=>{
//         if (err) res.send({auth:false,token:"invalid token"})
//         User.findById(data.id,(err,result)=>{
//             if(err) res.status(400).send("Somthing is wrong please try after some time")
//             User.updateMany({email:result.email},{
//                 $set:{
//                     name:req.body.name,
//                     password:req.body.pasword,
//                     email:req.body.email,
//                     role:req.body.role?req.body.role:"user",
//                     isActivate:req.body.isActivate?req.body.isActivate:true
//                 }
//             },(err)=>{
//                 if(err) throw err
//                 res.send("User Updated Successfully");
//             })
//             // res.status(200).send(result);
//         })
//     })
// })




//connect to the server
app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`i'm working at ${port}`);
})