const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const User = require('../../models/user');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password','Please enter  a password with minimun 8 characters').isLength({min:8})
], 
async (req,res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {name, email, password} = req.body;

    try{
        //see if the user exists
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({errors: [{msg:'User already exists'}]});
        }

        user = new User({
            name,
            email,
            password
        });

        //encrypt password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();  //anything with promise use await

        //return jsonwebtoken for user to be logged in as soon as registering
        const payload = {
            user: {
                id : user.id
            }
        }

        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            {expiresIn: 360000},
            (err, token) => {          //callback
                if (err) throw err;
                res.json({token});
            });


        //access data sent by req.body
        //console.log(req.body);
        //res.send('User registered');

    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }

    

    
});

module.exports = router;