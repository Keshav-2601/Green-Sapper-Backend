import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let client;
let clientPromise;

const mongodbconnection = async () => {
  if (!clientPromise) {
    clientPromise = MongoClient.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoClient) => {
      client = mongoClient;
      console.log('Db is connected');
      return mongoClient;
    }).catch(err => {
      console.log('Failed to connect to the database', err);
      throw err;
    });
  }

  return clientPromise;
};

const getdb = () => {
  if (!client) {
    throw new Error('Must call mongodbconnection() before calling getdb()');
  }
  return client.db();
};

export { mongodbconnection, getdb };
