import { getdb } from "../config/monggodb.js";
export default class AboutUsRepository{
   static async createdata(data){
    try {
        const db=getdb();
        const collection=db.collection('AboutUS_Table');
        await collection.insertOne(data)
        console.log('data has been created');
    } catch (error) {
        console.log('err has occured',error)
    }
   }
   static async get(){
    try {
        const db=getdb();
        const collection=db.collection('AboutUS_Table');
        await collection.find();
    } catch (error) {
        console.log("error has occures",error);
    }
   }
}