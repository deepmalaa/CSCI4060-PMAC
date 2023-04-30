const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const nodemailer = require('nodemailer');
const User = require('../../models/User');
const jwt_decode = require('jwt-decode');
const transporter = require('../../config/transporter');
const { EmailOutlined } = require('@material-ui/icons');


// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//           service: 'gmail',
//           port:587,
//           secure: false,
//           auth: {
//               user: 'ulm.pmac.email@gmail.com',
//               pass: 'thhdzpvqemggeovc'
//           }
// });


// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter  a password with minimun 8 characters').isLength({ min: 8 })
],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password, type } = req.body;

        try {
            //see if the user exists
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
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
                    id: user.id,
                    role: user.type
                }
            }

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 },
                (err, token) => {          //callback
                    if (err) throw err;
                    res.json({ token });
                });

                const newToken = jwt.sign(
                    {user: {
                      id: user.id,
                  }},
                    config.get('jwtSecret'),
                    { expiresIn: 3600 },
                    );


            //access data sent by req.body
            //console.log(req.body);
            //res.send('User registered');

            const url = `https://ulm-pmac.software/api/users/confirmation/${newToken}`;

            var mailOptions = {
                from: 'ulm.pmac.email@gmail.com',
                to: email, // list of receivers
                subject: "Confirm your email", // Subject line
                text: "Hello world?", // plain text body
                html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`, // html body
            };

            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }});

            
        if(user.type === 'Committee'){

            const url1 = `https://ulm-pmac.software/api/users/chair_confirmation/${newToken}`;

            var mailOptions1 = {
                from: 'ulm.pmac.email@gmail.com',
                to: "deepmalabhomi@gmail.com", // list of receivers
                subject: "Confirm email for a committee account", // Subject line
                html: `Please click this email to confirm the email ${email} : <a href="${url1}">${url1}</a>`, // html body
            };

            transporter.sendMail(mailOptions1, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }});
            
        }

        if(!user.confirmed){
            return res.status(400).json({errors: [{msg:'Please confirm your email to login'}]});
        }
        if(!user.chair_confirmed){
            return res.status(400).json({errors: [{msg:'The chair has not authorized your account'}]});
        }
        

        }
        catch (err) {
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
    check('newPassword', 'Please enter  a password with minimun 8 characters').isLength({ min: 8 })
],
    async (req, res) => {

        const { currentPassword, newPassword } = req.body;

        try {
            //see if the user exists
            let user = await User.findOne({ _id: req.params.id });
            if (!user) {
                return res.status(400).json({ errors: [{ msg: 'User not found' }] });
            }

            const passwordMatch = await bcrypt.compare(currentPassword, user.password);

            if (!passwordMatch) {
                return res.status(400).json({ errors: [{ msg: 'Current Password do not match' }] });
            }
            if (passwordMatch) {
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
                    id: user.id,
                    role: user.type
                }
            }

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 },
                (err, token) => {          //callback
                    if (err) throw err;
                    res.json({ token });
                });


            //access data sent by req.body
            //console.log(req.body);
            //res.send('User registered');

        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });


router.get('/confirmation/:token', async ({ params: { token } }, res) => {
    try{
        const tokenId = jwt_decode(token)
        console.log(tokenId);
        User.findByIdAndUpdate(tokenId.user.id, { confirmed: true },
                            function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User : ", docs);
    }
} );
        // const user = await User.findOne({ _id: tokenId.user.id })
        // user.confirmed = true;
        // await user.save();

        return res.redirect('https://ulm-pmac.software/login');
       
    }
    catch (e)
    {
        res.send('error');
    }


})

router.get('/chair_confirmation/:token', async ({ params: { token } }, res) => {
    try{
        const tokenId = jwt_decode(token)
        console.log(tokenId);
        User.findByIdAndUpdate(tokenId.user.id, { chair_confirmed: true },
                            function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User : ", docs);
    }
} );
        // const user = await User.findOne({ _id: tokenId.user.id })
        // user.confirmed = true;
        // await user.save();

        return res.redirect('https://ulm-pmac.software/login');
       
    }
    catch (e)
    {
        res.send('error');
    }


})

module.exports = router;