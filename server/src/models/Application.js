import mongoose from 'mongoose';
const applicationSchema=new mongoose.Schema({
  job:{type:mongoose.Schema.Types.ObjectId,ref:'Job',required:true}, applicant:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
  resumeUrl:{type:String,required:true}, coverLetter:String,
  status:{type:String,enum:['applied','shortlisted','interview','selected','rejected'],default:'applied'}
},{timestamps:true});
applicationSchema.index({job:1,applicant:1},{unique:true});
export default mongoose.model('Application',applicationSchema);
