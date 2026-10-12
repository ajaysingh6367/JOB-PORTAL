import User from '../models/User.js'; import Job from '../models/Job.js'; import Application from '../models/Application.js';
export async function stats(req,res){const [users,recruiters,jobseekers,jobs,applications]=await Promise.all([User.countDocuments(),User.countDocuments({role:'recruiter'}),User.countDocuments({role:'jobseeker'}),Job.countDocuments(),Application.countDocuments()]);res.json({stats:{users,recruiters,jobseekers,jobs,applications}});}
export async function users(req,res){const list=await User.find().sort({createdAt:-1});res.json({users:list});}
export async function jobs(req,res){const list=await Job.find().populate('recruiter','name email').sort({createdAt:-1});res.json({jobs:list});}
export async function deleteUser(req,res){if(String(req.user._id)===req.params.id)return res.status(400).json({message:'Cannot delete yourself'});await User.findByIdAndDelete(req.params.id);res.json({message:'User deleted'});}
export async function deleteJob(req,res){await Job.findByIdAndDelete(req.params.id);res.json({message:'Job deleted'});}
