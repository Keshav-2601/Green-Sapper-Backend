import contactrepository from "./contact.repository.js"
export default class contactcontroller{
    async get(req,res){
        try{
            const contactdetails={
                name:req.body.name,
                email:req.body.email,
                message:req.body.message,
            }
            
            await  contactrepository.getcontact(contactdetails);
            return res.status(200).send("your deatils have been submitted");
        }
        catch(err){
            console.log("error ",err);
        }
       
    }
}