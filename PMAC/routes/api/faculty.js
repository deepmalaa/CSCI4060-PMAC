const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');

const FacultyForm = require('../../models/FacultyForm');


router.post('/', [auth, [
    check('name_applicant', 'Applicant is required').not().isEmpty(),
]], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {
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
facultyformFields.user = req.user.id;
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


router.get('/',auth, async (req, res) => {
    try {
      const form = await FacultyForm.findOne().populate('user', ['fname', 'lname']);
      res.json(form);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


module.exports = router;