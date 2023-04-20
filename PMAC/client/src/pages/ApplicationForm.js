import React, { Fragment, useState, useEffect } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile, saveProfile } from '../actions/profile';
import s from '../styles/ApplicantInformation.module.css';
import moment from "moment";
import Sidebar from '../components/layout/Sidebar';

const initialState = {
    fname:"",
    lname:"",
    mname:"",
    cwid:"",
    cell:"",
    address:"",
    ulm_email:"",
    alt_email:"",
    bdate:"",
    major:"",
    minor:"",
    grad_date:"",
    gpa:"",
    entrance_date:"",
    mcat:"",
    dat:"",
    oat:"",
    gre:"",
    scoreBreakdown: '',
    exam_date:"",
    amcas_id:"",
    aacomas_id:"",
    aadsas_id:"",
    aamc_id:"",
    caspa_id:"",
    facultyEval: '',
    schoolType:''
};

const ApplicationForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  saveProfile
}) => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // if there is no profile, attempt to fetch one
    if (!profile) getCurrentProfile();

    // if we finished loading and we do have a profile
    // then build our profileData
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
    
      // set local state with the profileData
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    const editing = profile ? true : false;
    e.preventDefault();
    createProfile(formData, editing).then(() => {
      //if (!editing) navigate('/clubExperience');
    });
  };


  const onSaveData = (e) => {
    // Call the saveProfile action or any other logic you want to perform to save the data
    e.preventDefault();
    saveProfile(formData);
  };



  return (
    <>
      <Sidebar role="student" />
      {isSubmitted ? (
        <p>Form submitted successfully!</p>
      ) : (

    <body className={s.body}>

    <div className={s.top2}>
        <div className={s.goldBars}> </div>
              <div className={s.whiteBar}>
                  <ul>
                      <li><a href="/dashboardStudent">Home</a></li>
                      <li><a href="/StudentContactPage">Contact</a></li>
                  </ul>

              </div>
        <div className={s.goldBars}> </div>
    </div>  

    <div className={s.subTitle}>Applicant Information</div>

    <form onSubmit={e => onSubmit(e)} className={s.form}>

      

      <div className={s.entire}>
      <div className={s.firstArea}>
        <div className={s.left}>
          <label htmlFor="fname">First Name: <br></br></label>
          <input
            type="text"
            id="fname"
            name="fname"
            size = "50"
            value={formData.fname}
            onChange={e=> onChange(e)}
            required/>
        </div>
        

        <div className={s.left}>
          <label htmlFor="mname">Middle Name: <br></br></label>
          <input
            type="text"
            id="mname"
            name="mname"
            size = "50"
            value={formData.mname}
            onChange={e=> onChange(e)}
            />
        </div>

        

        <div className={s.left}>
          <label htmlFor="lname">Last Name: <br></br></label>
          <input
            type="text"
            id="lname"
            name="lname"
            size = "50"
            value={formData.lname}
            onChange={e=> onChange(e)}
            required/>
        </div>
        

        <div className={s.left3}>
          <label htmlFor="cwid">ULM CWID #: <br></br></label>
          <input
            type="text"
            id="cwid"
            name="cwid"
            size = "50"
            value={formData.cwid}
            onChange={e=> onChange(e)}
            />
        </div>
        

        <div className={s.left2}>
          <label htmlFor="address">Local Address: (Ex. 3425 Stone Street, Apt. 2A, Jacksonville, FL 39404) <br></br></label>
          <input
            type="text"
            id="address"
            name="address"
            size = "50"
            value={formData.address}
            onChange={e=> onChange(e)}
            required/>
        </div>

        <div className={s.clear}> </div>
        

        <div className={s.left}>
          <label htmlFor="phone">Phone: <br></br></label>
          <input
            type="text"
            id="phone"
            name="cell"
            size = "50"
            value={formData.cell}
            onChange={e=> onChange(e)}
            required/>
        </div>
      

        <div>

        <div className={s.left}>
          <label htmlFor="email">ULM Email: <br></br></label>
          <input
            type="text"
            id="email"
            name="ulm_email"
            size = "50"
            value={formData.ulm_email}
            onChange={e=> onChange(e)}
          />
        </div>  
        

        <div className={s.left}>
          <label htmlFor="altEmail">Alternate Email: <br></br></label>
          <input
            type="text"
            id="altEmail"
            name="alt_email"
            size = "50"
            value={formData.alt_email}
            onChange={e=> onChange(e)}
            required/>
        </div>
      </div>

      <div className={s.clear}> </div>
      
      <div className={s.secondArea}>
        <div className={s.left}>
          <label htmlFor="majors">Major(s): <br></br></label>
          <input
            type="text"
            id="majors"
            name="major"
            size = "50"
            value={formData.major}
            onChange={e=> onChange(e)}
            required/>
        </div>
        

        <div className={s.left}>
          <label htmlFor="minors">Minor(s): <br></br></label>
          <input
            type="text"
            id="minors"
            name="minor"
            size = "50"
            value={formData.minor}
            onChange={e=> onChange(e)}
            />
        </div>

        <div className={s.left}>
          <label htmlFor="gpa">Overall Collegiate GPA: <br></br></label>
          <input
            type="text"
            id="gpa"
            name="gpa"
            size = "50"
            value={formData.gpa}
            onChange={e=> onChange(e)}
            required/>
        </div>
        

        <div className={s.grad}>
          <label htmlFor="expGraduation">Date of Expected Graduation from ULM: <br></br></label>
          <input
            type="date"
            id="expGraduation"
            name="grad_date"
            size = "50"
            value={moment(formData.grad_date).utc().format('YYYY-MM-DD')}
            onChange={e=> onChange(e)}
            required/>
        </div>
      </div>
      

      
      
      </div>
    
    
    <div className={s.thirdArea}>
      <div className={s.profGrad}>
          <label htmlFor="profSchoolDate">Date of Proposed Entrance to Professional School: <br></br></label>
          <input
            type="date"
            id="profSchoolDate"
            name="entrance_date"
            size = "50"
            value={moment(formData.entrance_date).utc().format('YYYY-MM-DD')}
            onChange={e=> onChange(e)}
            required/>
      </div>

      <div className={s.left1}>
          <label htmlFor="MCAT">MCAT: <br></br></label>
          <input
            type="text"
            id="MCAT"
            name="mcat"
            size = "25"
            value={formData.mcat}
            onChange={e=> onChange(e)}
            />
      </div>
      

      <div className={s.left1}>
          <label htmlFor="DAT">DAT: <br></br></label>
          <input
            type="text"
            id="DAT"
            name="dat"
            size = "25"
            value={formData.dat}
            onChange={e=> onChange(e)}
            />
      </div>
      

      <div className={s.left1}>
          <label htmlFor="OAT">OAT: <br></br></label>
          <input
            type="text"
            id="OAT"
            name="oat"
            size = "25"
            value={formData.oat}
            onChange={e=> onChange(e)}
            />
      </div>
      

      <div className={s.left1}>
          <label htmlFor="GRE">GRE: <br></br></label>
          <input
            type="text"
            id="GRE"
            name="gre"
            size = "25"
            value={formData.gre}
            onChange={e=> onChange(e)}
            />
      </div>
    
    


      <div className={s.scores}>
          <label htmlFor="scoreBreakdown">Please include your breakdown scores: <br></br></label>
          <textarea
            style={{
              width: "100%",
              height: "100%",
              resize: "none"}}
            type="text"
            id="scoreBreakdown"
            name="scoreBreakdown"
            size = "500"
            value={formData.scoreBreakdown}
            onChange={e=> onChange(e)}

            />
      </div>
    
    

      <div className={s.examTaken}>
        <label htmlFor="examDate">Date of exam taken or expected date of exam: <br></br></label>
        <input
          type="date"
          id="examDate"
          name="exam_date"
          size = "50"
          value={moment(formData.exam_date).utc().format('YYYY-MM-DD')}
          onChange={e=> onChange(e)}
          required/>
      </div>
    </div>
    
      
    <div className={s.fourthArea}>         
      <div className={s.apply}>
        <label htmlFor="schoolType">Type of School Application will be sent: <br></br></label>
        <input
          type="text"
          id="schoolType"
          name="schoolType"
          size = "50"
          value={formData.schoolType}
          onChange={e=> onChange(e)}
          required/>
      </div>

      <span className={s.note}>Note: Depending on the type of application, please fill in the appropriate ID numbers.</span>
      
      <div className={s.clear}> </div>
      <div className={s.left}>
        <label htmlFor="amca">AMCAS Letter ID:<br></br></label>
        <input
          type="text"
          id="amca"
          name="amcas_id"
          size = "25"
          value={formData.amcas_id}
          onChange={e=> onChange(e)}
          /> 
      </div>
        


      <div className={s.left}>
          <label htmlFor="aamc">AAMC ID:<br></br></label>
          <input
            type="text"
            id="aamc"
            name="aamc_id"
            size = "25"
            value={formData.aamc_id}
            onChange={e=> onChange(e)}
            /> 
        </div>
        


        <div className={s.left}>
          <label htmlFor="aacomas">AACOMAS CAS #:<br></br></label>  
          <input
            type="text"
            id="aacomas"
            name="aacomas_id"
            size = "25"
            value={formData.aacomas_id}
            onChange={e=> onChange(e)}
            /> 
        </div>
        
        <div className={s.clear}> </div>

        <div className={s.left}>
          <label htmlFor="caspa">CASPA CAS #:<br></br></label>  
          <input
            type="text"
            id="caspa"
            name="caspa_id"
            size = "25"
            value={formData.caspa_id}
            onChange={e=> onChange(e)}
            /> 
        </div>
        

        <div className={s.left}>
          <label htmlFor="aadsas">AADSAS ID #:<br></br></label> 
          <input
            type="text"
            id="aadsas"
            name="aadsas_id"
            size = "25"
            value={formData.aadsas_id}
            onChange={e=> onChange(e)}
            /> 
        </div>
      
      
    <div className={s.clear}> </div>
    
    <div className={s.fifthArea}>
    <span className={s.note}>Faculty Members Submitting Evaluations on your Behalf: </span>
    <div className={s.clear}> </div>

      <div className={s.fac}>
        <label htmlFor="facultyEval">Name / Title/ Department<br></br></label> 
        <textarea
          type="text"
          id="facultyEval"
          name="facultyEval"
          size = "500"
          value={formData.facultyEval}
          onChange={e=> onChange(e)}
          /> 
      </div>
    </div>
      </div>
      </div> 
      <br></br>
      <br></br>

      <div className={s.lastArea}>
      <h5>Missing information? Save for later and submit when completed!!</h5>


      
        <button type="submit" className='btn btn-primary'>
          Submit
        </button>
      
      
      
        <Link to="/clubExperience" className="btn btn-light my-1">Next Page</Link>
        
          {/* Form fields */}
          


        
          
           
            <button onClick={e => onSaveData(e)} className="btn btn-primary">Save and Finish Later </button>
          

          
            
            
          
        
      </div>
            


    </form>
    </body>
    )}
    </>
  );  
};

ApplicationForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  saveProfile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile , saveProfile })(
  ApplicationForm
);