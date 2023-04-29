const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    fname:{
        type: String,
        
    },
    lname:{
        type: String,
        
    },
    mname:{
        type: String,
        
    },
    address:{
        type: String,
    },
    cwid:{
        type: String,
        
    },
    cell:{
        type: String,
        
    },
    ulm_email:{
        type: String,
    },
    alt_email:{
        type: String,
    },
    bdate:{
        type: Date,
        
    },
    major:{
        type: String,
        
    },
    minor:{
        type: String,
        
    },
    grad_date:{
        type: Date,
        
    },
    gpa:{
        type: String,
        
    },
    entrance_date:{
        type: Date,
        
    },
    mcat:{
        type: String,
        
    },
    dat:{
        type: String,  
    },
    oat:{
        type: String,
        
    },
    gre:{
        type: String,
        
    },
    scoreBreakdown:{
        type:String,
    },
    medicalField1:{
        type:Boolean,
    },
    medicalField2:{
        type:Boolean,
    },
    medicalField3:{
        type:Boolean,
    },
    medicalField4:{
        type:Boolean,
    },
    medicalField5:{
        type:Boolean,
    },
    exam_date:{
        type: Date,  
    },
    schoolType:{
        type:String,
    },
    amcas_id:{
        type: String,
        
    },
    aacomas_id:{
        type: String,
        
    },
    aadsas_id:{
        type: String,
        
    },
    aamc_id:{
        type: String,
        
    },
    caspa_id:{
        type: String,
        
    },
    facultyEval:{
        type:String,
    },
    status:{
        type:Boolean,
    },

    work_experience:[{
        title:{
            type:String
        },
        company:{
            type:String
        },
        years:{
            type:String
        },
        description:{

        }
    }],
    club_experience:[{
        title:{
            type:String
        },
        company:{
            type:String
        },
        years:{
            type:String
        },
        description:{

        }
    }],
    field_experience:[{
        title:{
            type:String
        },
        company:{
            type:String
        },
        years:{
            type:String
        },
        description:{

        }
    }],
    honors:[{
        title:{
            type:String
        },
        company:{
            type:String
        },
        years:{
            type:String
        },
        description:{

        }
    }],
    lab_experience:[{
        title:{
            type:String
        },
        company:{
            type:String
        },
        years:{
            type:String
        },
        description:{

        }
    }],
    volunteer_experience:[{
        title:{
            type:String
        },
        company:{
            type:String
        },
        years:{
            type:String
        },
        description:{

        }
    }],

    headshot:{
        type: String

    },
    transcript:{
        type: String

    },
    personal_statement:{
        type: String

    },


    date:{
        type: Date,
        default: Date.now
    },
    interview_evaluation:[{
        name_applicant: {
          type: String,
          required: true
        },
        name_evaluator: {
          type: String,
          required: true
        },
        title_evaluator: {
          type: String,
          required: true
        },
        application: {
          type: String,
          required: true
        },
        interviewEvaluation: {
          type: String
        },
        file: {
          data: Buffer,
          contentType: String
        }
    }],
});


module.exports = Profile = mongoose.model('profile', ProfileSchema);