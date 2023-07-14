const userData = require('../models/userSchema');

const login = async (req,res)=>{
    res.send("login");
}

const signup = async (req,res)=>{
  const user = await userData.create({...req.body});
  res.status(201).send('hii')
}

module.exports = {
    login,
    signup,
}