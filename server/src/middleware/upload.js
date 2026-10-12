import multer from 'multer';
const storage=multer.memoryStorage();
export const upload=multer({storage,limits:{fileSize:5*1024*1024},fileFilter:(req,file,cb)=>{ const ok=['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.mimetype); cb(ok?null:new Error('Only PDF, DOC or DOCX resumes are allowed'),ok); }});
