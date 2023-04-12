

const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');

const eventSchema = require('../../models/eventSchema');
const User = require('../../models/User');

// @route   POST api/calendar
// @desc    Application release
// @access  Private
router.post('/',[auth,[
    check('title', 'title is required').not().isEmpty(),
    check('start', 'start is required').not().isEmpty(),
    check('end', 'end is required').not().isEmpty(),
    check('daysOfWeek', 'daysOfWeek is required').not().isEmpty(),
    check('startTime', 'startTime is required').not().isEmpty(),
    check('endTime', 'endTime is required').not().isEmpty(),
    check('id', 'id is required').not().isEmpty(),
]],async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    
    const {
        title,
        start,
        end,
        daysOfWeek,
        startTime,
        endTime,
        id

    } = req.body;

    //build app release obj
    const calendarFields ={};
    calendarFields.user = req.user.id;
    if(title) calendarFields.title = title;
    if(start) calendarFields.start = start;
    if(end) calendarFields.end = end;
    if(daysOfWeek) calendarFields.daysOfWeek = daysOfWeek;
    if(startTime) calendarFields.startTime = startTime;
    if(endTime) calendarFields.endTime = endTime;
    if(id) calendarFields.id = id;
    
    try{
    
        //Create
        let calendar = new eventSchema(calendarFields);
        await calendar.save();
        res.json(calendar);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
});

router.get('/',auth, async (req, res) => {
    console.log(req.user.id)
    try {
      const form = await eventSchema.find({ user: req.user.id }).select('-__v -_id');
      res.json(form);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
      const deletedEvent = await eventSchema.findOneAndDelete({id: id});
      if (!deletedEvent) {
        return res.status(404).send('Event not found');
      }
      //console.log("Hi it is indeed calling");
      return res.status(200).send('Event deleted successfully');
    } catch (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
  });


module.exports = router;