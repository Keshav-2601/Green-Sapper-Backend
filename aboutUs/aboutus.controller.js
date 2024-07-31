import AboutUsRepository from "./aboutus.repository.js";
export default class AboutUsController{
    async aboutusdata(res,req){
        try {
            const data={
                msg:req.body.msg
            }
            await AboutUsRepository.createdata(data);
            return res.status(200).send('data has been sent ')
        } catch (error) {
            console.log("no data is found");
        }
        
    }
    async getdata(res,req){
           try {
            await AboutUsRepository.get();
            
           } catch (err) {
            console.log("error done",err);
           }
    }
}