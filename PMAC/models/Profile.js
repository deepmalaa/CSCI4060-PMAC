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
    falcultyEval:{
        type:String,
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



    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);