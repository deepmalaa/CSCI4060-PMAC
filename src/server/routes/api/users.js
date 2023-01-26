const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const connectDB = require('../../config/db');

const config = require('config');


const { MongoClient } = require('mongodb');

const uri = config.get('mongoURI');

const client = new MongoClient(uri);
//const User = require('../../user');

// @route   POST api/users
// @desc    Get user name
// @access  Public

router.post('/',[
    check('name', 'Please enter a name').not().isEmpty()
],

async(req,res) => {


    const doc = req.body;
    try{
        const database = client.db("insertDBTest");
        const clientName = database.collection("clientName");
        const result = await clientName.insertOne(doc);
      
        res.json({msg: 'Your ID is ' + result.insertedId });
    
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
    
}

);

module.exports = router;