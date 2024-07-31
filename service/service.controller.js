import servicerepository from "./service.repository.js";
export default class servicecontroller{
    async createdata(res,req){
      try{
        const files=res.files;
        const images=files.map((m)=>m.filename);

        let data={
            content:req.body.content,
            image:images
        }
        await servicerepository.create(data);
        return req.status(201).send("service data has been added");
      }catch(err){
         console.log("error occur",err);
      }
    }
}