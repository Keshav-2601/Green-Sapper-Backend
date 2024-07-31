import express from 'express';
import projectcontroller from './project.controller.js';
import { ProjectUpload } from '../middleware/Project.multer.js';
const projectrouter=express.Router();

const projectcontrol=new projectcontroller();

projectrouter.post('/',ProjectUpload.array('image',3),(res,req)=>{
    projectcontrol.create(res,req);
})

export{projectrouter};