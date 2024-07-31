import { getdb } from "../config/monggodb.js";
export default class servicerepository{
    //So here mongodb will make table service_table if it not there ,
    //then it will create the filed content,images as u ahve defined in data in controller.
    //so without implicitly giving the field names content and images mongodb willknwo what fields are required.
    static async create(data){
        try{
         const db=getdb();
         const collection=db.collection("Service_Table");
         await collection.insertOne(data);
    }
    catch(err){
      console.log("error",err);
    }
   }
}