import express from 'express';
import contactcontroller from './contact.controller.js';
import { upload } from '../middleware/multer.js';
const contactrouter=express.Router();

const contactControl=new contactcontroller();

contactrouter.post('/' ,async (req, res) => {
    try {
        console.log('Received request:', req.body);
         // Log the received file
        await contactControl.get(req, res);
    } catch (error) {
        console.log("Error in POST /Contacts:", error);
        res.status(500).send('Internal Server Error');
    }
});
export {contactrouter}