const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');
const FacultyForm = require('../../models/FacultyForm');
const checkObjectId = require('../../middleware/checkObjectId');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const config = require('config');

router.post('/',  [
    check('name_applicant', 'Applicant is required').not().isEmpty(),
], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {
        user,
        name_applicant,
        name_evaluator,
        intellect, 
        motivation, 
        initiative, 
        socialMaturity, 
        emotionalMaturity,
        reliability, 
        leadership,
        character,
        communication,
        capacity,
        strengths,
        weaknesses,
        potential,
        comments
    } = req.body;

const facultyformFields = {};
// facultyformFields.user = req.user.id;
if(user) facultyformFields.user = user;
if(name_applicant) facultyformFields.name_applicant = name_applicant;
if(name_evaluator) facultyformFields.name_evaluator = name_evaluator;
if(intellect) facultyformFields.intellect = intellect;
if(motivation) facultyformFields.motivation = motivation;
if(initiative) facultyformFields.initiative = initiative;
if(socialMaturity) facultyformFields.socialMaturity = socialMaturity;
if(emotionalMaturity) facultyformFields.emotionalMaturity = emotionalMaturity;
if(reliability) facultyformFields.reliability = reliability;
if(leadership) facultyformFields.leadership = leadership;
if(character) facultyformFields.character = character;
if(communication) facultyformFields.communication = communication;
if(capacity) facultyformFields.capacity = capacity;
if(strengths) facultyformFields.strengths = strengths;
if(weaknesses) facultyformFields.weaknesses = weaknesses;
if(potential) facultyformFields.potential = potential;
if(comments) facultyformFields.comments = comments;


try {
    let facultyForm = new FacultyForm(facultyformFields);
    await facultyForm.save();
    res.json(facultyForm);
}
catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
}

});

//get recommendation forms by id
router.get('/:id',
checkObjectId('id'), 
 async ({ params: { id } }, res) => {
  console.log(id);
    try {
      const facultyForms = await FacultyForm.find({user: id});
      console.log("from faculty")
      console.log(facultyForms);
      res.json(facultyForms);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


  //request recommendation
  router.get('/request/:id', checkObjectId('id'), 
  async ({ params: { id } }, res) => {
    try {

      const user1 = await User.findOne({ _id: id }).populate('name', 'email');
      const profile = await Profile.findOne({ user: id }).populate('facultyEval');
    

    
    const newToken = jwt.sign(
        {user: {
          id: id,
      }},
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        );

        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          service:'ethereal',
          service:'gmail',
          secure: false,
          port: 587,
          auth: {
              user: 'ulm.pmac.email@gmail.com',
              pass: 'thhdzpvqemggeovc'
          }
      });

      const url = `http://localhost:3000/FacultyAdvisoryForm/${newToken}`;
      console.log(profile.facultyEval)
            var mailOptions = {
                from: 'ulm.pmac.email@gmail.com',
                to: profile.facultyEval, // list of receivers
                
                subject: "Recommendation Letter", // Subject line
                // text: "Hello world?", // plain text body
                html: `Student ${user1.name} has requested a recommendation letter from you. Please go to the link to submit within 5 days. <a href="${url}">${url}</a>`, // html body
            };

            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  res.status(250).send("email sent");
                }});
      
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


module.exports = router;