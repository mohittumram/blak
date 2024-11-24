import mongoose from 'mongoose';

const config = require ("./Config")

const db=require('./Config').get(process.env.NODE_ENV).DB;

const mongodburl=`mongodb://${db.HOST}:${db.PORT}/${db.DATABASE}`

const usecredential={
    user:db.USERNAME,
    pass:db.PASSWORD
} 
export const mongoconnection = async()=>{
    try{
        await mongoose.connect(mongodburl,usecredential);
        console.log("This Database Is Connected To the Server !!!");
    }
    catch(e){
        console.log(e.message)
        throw e.message;
    }
} 