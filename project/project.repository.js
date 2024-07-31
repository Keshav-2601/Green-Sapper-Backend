import { getdb } from "../config/monggodb.js";
export default class projectrepository{
  static async createproject(data){
    try{
        const db=getdb();
        const collection=db.collection("Project_Table");
        await collection.insertOne(data);
    }catch(err){
         console.log("No project data is found",err);
    }
  }
}