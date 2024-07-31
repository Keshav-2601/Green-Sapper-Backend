import express from 'express'
import { Router } from "express";
import servicecontroller from "./service.controller.js";
import { upload } from "../middleware/multer.js";
const servicerouter=express.Router();

const serviceControl=new servicecontroller();
servicerouter.get('/',(res,req)=>{
   serviceControl.getdata(res,req);
})
servicerouter.post('/',upload.array("image",3),(res,req)=>{
    serviceControl.createdata(res,req);
})
export {servicerouter};