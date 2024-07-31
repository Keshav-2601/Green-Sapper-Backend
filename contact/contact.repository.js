import { getdb } from "../config/monggodb.js";
export default class contactrepository{
   static async getcontact(data){
      try{
       const db=getdb();
       const collection=db.collection("Contact_Table");
       await collection.insertOne(data);
       return console.log("Details have been added to database");
      }catch(err){
         console.log("error",err);
      }
    }
}