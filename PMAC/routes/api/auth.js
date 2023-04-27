const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator');

const User = require('../../models/User');

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req,res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/auth
// @desc    Authenticate user and get token
// @access  Public
router.post('/',[
    check('email', 'Please include a valid email').isEmail(),
    check('password','Password is required').exists()
], 
async (req,res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { email, password} = req.body;

    try{
        //see if the user exists
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({errors: [{msg:'Invalid credentials'}]});
        }

        if(!user.confirmed){
            return res.status(400).json({errors: [{msg:'Please confirm your email to login'}]});
        }

        //check password
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({errors: [{msg:'Invalid credentials'}]});
        }

        //return jsonwebtoken for user to be logged in as soon as registering
        const payload = {
            user: {
                id : user.id,
                role: user.type
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


    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }

    

    
});

module.exports = router;