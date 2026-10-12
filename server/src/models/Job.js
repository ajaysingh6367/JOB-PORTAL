import mongoose from 'mongoose';
const jobSchema=new mongoose.Schema({
  title:{type:String,required:true,trim:true}, company:{type:String,required:true,trim:true}, location:{type:String,required:true},
  category:{type:String,required:true}, experience:{type:String,required:true}, salaryMin:{type:Number,default:0}, salaryMax:{type:Number,default:0},
  type:{type:String,enum:['Full-time','Part-time','Contract','Internship','Remote'],default:'Full-time'}, description:{type:String,required:true},
  requirements:[String], recruiter:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}, status:{type:String,enum:['open','closed'],default:'open'}
},{timestamps:true});
export default mongoose.model('Job',jobSchema);
