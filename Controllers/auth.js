const userData = require('../models/userSchema');
const dataSchema = require('../models/dataSchema');

const downloadProfile = async (req,res)=>{
  const id = req.body._id
  const data = await userData.findOne({"_id":id})
    res.status(200).json(data);
}
const downloadLink = async (req,res)=>{
  const id = req.body._id
  const data = await dataSchema.findOne({"_id":id})
    res.status(200).json(data);
}
const uploadProfile = async (req,res)=>{
  const user = await userData.create({...req.body});
  res.status(201).send('yes')
}
const uploadLink = async (req,res)=>{
  console.log(req.body)
  try{
    const user = await dataSchema.findByIdAndUpdate(
      req.body._id,
      { $push: {recent_links : req.body.recent_links}},
      { new: true, upsert: true })
    res.status(201).send('done')
  }catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  downloadProfile,
  downloadLink,
  uploadProfile,
  uploadLink
}