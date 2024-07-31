import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGODB_URL;

let client;
const mongodbconnection = async () => {
  try {
    await MongoClient.connect(url).then((res) => {
      client = res;
      console.log('Db is connected');
    });
  } catch (err) {
    console.log('some error', err);
  }
};

const getdb = () => {
  return client.db(); //connect to actual db 
};

export { mongodbconnection, getdb };
