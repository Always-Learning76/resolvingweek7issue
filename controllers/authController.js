const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = "securesecret";
const expiry = 3600;

exports.registerNewUser = (req, res) => {
    
//fetch user info from req body
User.findOne({username : req.body.username}), (err, existingUser) => {
    if(err) {
        return res.status(500).json({err})
    } 
        if(existingUser) {
            return res.status(400).json({message: "username exist"})
        }
        User.create({firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username
        }, (err, newUser) => {
            if(err) {
                return res.status(500).json({ err })
            
            }
            console.log("hellohello")
           bcrypt.genSalt(10, (err, salt) => {
               if(err){
                   return res.status(500).json({err})
               }
               bcrypt.hash(req.body.password, salt, (err, hashPassword) => {
                   if(err) {
                       return res.status(500).json({err})
                   }

                   newUser.password = hashPassword;
                   newUser.save((err, savedUser) => {
                       if(err) {
                           return res.status(500).json({err})
                       }
                       jwt.sign({
                        id: newUser_id,
                        username: newUser.username,
                        firstname: newUser.firstname,
                        lastname: newUser.lastname

                       }, secret, {expiresIn : expiry}, (err, token) =>{
                           if(err) {
                               return res.status(500).json({err})
                           }
                           return res.status(200).json({message: "user registration successful", token});
                       })
                   })
               })
           })

        })
}
//check username exist
//create new user
//hash pw
//save pw to db
}