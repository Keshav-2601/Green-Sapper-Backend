import express from 'express';
import {servicerouter} from './service/service.router.js';
import {mongodbconnection} from './config/monggodb.js';
import { projectrouter } from './project/project.router.js';
import { aboutusrouter } from './aboutUs/aboutus.router.js';
import { contactrouter } from './contact/contact.router.js';
import cors from 'cors';
import dotenv from 'dotenv';
const server=express();
const corsOptions = {
    origin: 'https://greensapper.netlify.app/Contacts', // Replace with your frontend URL
    optionsSuccessStatus: 200
  };
server.use(cors(corsOptions),contactrouter); 
server.use(express.urlencoded({ extended: true }));
server.use(express.json()); 
server.use('/service',servicerouter);
server.use('/project',projectrouter);
server.use('/About',aboutusrouter);
server.use('/Contacts',contactrouter);
server.listen(3200,()=>{
    console.log("server is running");
    mongodbconnection();
});

