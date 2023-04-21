const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const auth = require('../../middleware/auth');

const User = require('../../models/User');

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

    const {name, email, password, type} = req.body;

    try{
        //see if the user exists
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({errors: [{msg:'User already exists'}]});
        }

        user = new User({
            name,
            email,
            password,
            type
        });

        //encrypt password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();  //anything with promise use await

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


        //access data sent by req.body
        //console.log(req.body);
        //res.send('User registered');

    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }   
});



router.get('/', async (req, res) => {
    //console.log(req.user.id)
    try {
      const form = await User.find();
      res.json(form);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


// @route   PATCH api/users/updatepassword/:id
// @desc    Update password
// @access  Private

router.patch('/updatepassword/:id', [
    check('newPassword','Please enter  a password with minimun 8 characters').isLength({min:8})
], 
async (req,res) => {

    const {currentPassword, newPassword} = req.body;

    try{
        //see if the user exists
        let user = await User.findOne({_id : req.params.id});
        if(!user){
            return res.status(400).json({errors: [{msg:'User not found'}]});
        }

        const passwordMatch = await bcrypt.compare(currentPassword, user.password);

        if(passwordMatch) {
            const salt = await bcrypt.genSalt(10);
            // const hashedPassword = await bcrypt.hash(newPassword, salt);

            // const updateResult = await User.findByIdAndUpdate({_id: req.params.id}, {password: hashedPassword});

            user.password = await bcrypt.hash(newPassword, salt);

        }

        //encrypt password
        

        await user.save();  //anything with promise use await

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