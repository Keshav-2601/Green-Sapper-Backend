import express from 'express';
import AboutUsController from './aboutus.controller.js';
const aboutusrouter=express.Router();
const aboutuscontrol=new AboutUsController();
aboutusrouter.post('/aboutus_Post', async (req, res) => {
    console.log("Received request for aboutus_Post");
    try {
      // Your existing logic here
       await aboutuscontrol.aboutusdata(res,req)
      // Simulate a delay or a heavy operation
      await new Promise(resolve => setTimeout(resolve, 1000));
  
    //   res.json({ message: "Success" });
    } catch (error) {
      console.error("Error handling aboutus_Post", error);
     // res.status(500).send("Error processing request");
    }
  });
aboutusrouter.get('/',(res,req)=>{
    aboutuscontrol.getdata(res,req);
})
export {aboutusrouter};