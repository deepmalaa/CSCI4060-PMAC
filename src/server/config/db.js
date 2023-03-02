//const mongoose = require('mongoose');

const config = require('config');
const { MongoClient } = require('mongodb');

const uri = config.get('mongoURI');

const client = new MongoClient(uri);

const connectDB = async () => {
    try {
        await client.connect();
        

        console.log("MongoDB connected");
    }
    catch(err){
        console.error(err.message);
        
        //exit process with failure
        process.exit(1);
    }
    finally{
        await client.close();
    }
};

module.exports = connectDB;
