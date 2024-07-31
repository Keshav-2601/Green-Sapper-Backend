import projectrepository from "./project.repository.js";
export default class projectcontroller{
   async create(res,req){
      try{
        const files=req.files;
        const images=files.map((m)=>m.filname);

        let project={
            content:req.body.content,
            image:images
        }
         await projectrepository.createproject(project);
         return res.status(200).send("project has been created");
      }catch(err){
         console.log("err has occured",err);
      }
    }
}