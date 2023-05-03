import React, { Fragment, useState, useEffect } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile, saveProfile } from '../actions/profile';
import { requestFacultyForms } from '../actions/facultyForm';
import s from '../styles/ApplicantInformation.module.css';
import moment from "moment";
import Sidebar from '../components/layout/Sidebar';
import auth from '../reducers/auth';

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
    medicalField1: "",
    medicalField2: "",
    medicalField3: "",
    medicalField4: "",
    medicalField5: "",
    exam_date:"",
    amcas_id:"",
    aacomas_id:"",
    aadsas_id:"",
    aamc_id:"",
    caspa_id:"",
    facultyEval: '',
    
};


const ApplicationForm = ({
  profile: { profile, loading },
  auth:{user},
  createProfile,
  getCurrentProfile,
  saveProfile,
  requestFacultyForms
}) => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [isChecked1, setIsChecked1] = useState(formData.medicalField1);
  const [isChecked2, setIsChecked2] = useState(formData.medicalField2);
  const [isChecked3, setIsChecked3] = useState(formData.medicalField3);
  const [isChecked4, setIsChecked4] = useState(formData.medicalField4);
  const [isChecked5, setIsChecked5] = useState(formData.medicalField5);

  const navigate = useNavigate();

const handleChange1 = () => {
  setIsChecked1(!isChecked1);
};
const handleChange2 = () => {
  setIsChecked2(!isChecked2);
};
const handleChange3 = () => {
  setIsChecked3(!isChecked3);
};
const handleChange4 = () => {
  setIsChecked4(!isChecked4);
};
const handleChange5 = () => {
  setIsChecked5(!isChecked5);
};

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
  }, [loading, getCurrentProfile, profile, auth]);

  

  const onChange = (e) => {
    console.log("HIT");
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });}

  const onSubmit = (e) => {
    console.log(e)
    const editing = profile ? true : false;
    e.preventDefault();
    createProfile(formData, editing).then(() => {
      //if (!editing) navigate('/clubExperience');
    });
    requestFacultyForms(user._id)
  };

  useEffect(() => {
    setIsChecked1(Boolean(formData.medicalField1));
    setIsChecked2(Boolean(formData.medicalField2));
    setIsChecked3(Boolean(formData.medicalField3));
    setIsChecked4(Boolean(formData.medicalField4));
    setIsChecked5(Boolean(formData.medicalField5));
  }, [formData]);

  const onSaveData = (e) => {
    // Call the saveProfile action or any other logic you want to perform to save the data
    e.preventDefault();
    saveProfile(formData);
  };


  const [isShown, setIsShown] = useState(false);
  

  return (
    <>
      <Sidebar role="student" />
      {isSubmitted ? (
        <p>Form submitted successfully!</p>
      ) : (
    
    <body>
      <div className={s.body}>

        <div className={s.top}>
            <div className={s.goldBars}> </div>
                  <div className={s.whiteBar}>
                      <ul>
                          <li><a href="/dashboardStudent">Home</a></li>
                          <li><a href="/clubExperience">Clubs</a></li>
                          <li><a href="/workExperience">Work Experience</a></li>
                          <li><a href="/fieldExperience">Field Experience</a></li>
                          <li><a href="/honorsExperience">Honors & Awards</a></li>
                          <li><a href="/labExperience">Lab Experience</a></li>
                          <li><a href="/volunteerExperience">Volunteer Work</a></li>
                      </ul>

                  </div>
            <div className={s.goldBars}> </div>
        </div>  

        <button
            className={s.buttonCust}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
          </button>
          {isShown && (
            <div className={s.hoverContent}>
              <div className={s.hoverHead}> 
                Help
              </div>
              <div className={s.hoverText}>
                - This page is where you enter all your 
                information needed for the application and interview process.
              </div>

              <div className={s.hoverText}>
                - You'll get a chance to show off your experience on the next few pages. 
                Be sure these get completed.
              </div>

              <div className={s.hoverText}>
                - Be sure to fill out all fields and if you are unsure 
                about an answer, you can always save and comeback later.
              </div>

              <div className={s.hoverText}>
                - If you are still unsure about the application form, locate the Contact Page 
              </div>
            </div>
          )}


        <div className={s.subTitle}>Applicant Information
          
        </div>

        

        

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
                size = "10"
                pattern="[0-9]*"
                value={formData.cwid}
                placeholder="3013013011"
                onChange={e=> onChange(e)}
                title="Please only enter numbers for CWID"
                />
                
            </div>
            

            <div className={s.left2}>
              <label htmlFor="address" >Local Address: (Ex. 3425 Stone Street, Apt. 2A, Jacksonville, FL 39404) <br></br></label>
              <input
                type="text"
                id="address"
                name="address"
                size = "50"
                value={formData.address}
                placeholder="3425 Stone Street, Apt. 2A, Jacksonville, FL 39404"
                onChange={e=> onChange(e)}
                required/>
            </div>

            <div className={s.clear}> </div>
            

            <div className={s.left}>
              <label htmlFor="phone" >Phone: ex. 318-123-1234 <br></br></label>
              <input
                type="tel"
                id="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="cell"
                size = "50"
                value={formData.cell}
                placeholder="318-123-1234"
                onChange={e=> onChange(e)}
                title="Example number: 318-123-1234"
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
                placeholder="3.75"
                pattern="[0-9]*.[0-9]*"
                onChange={e=> onChange(e)}
                title="Please enter GPA on a four point scale 4.00"
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
          <br/>
          <span className={s.note}>Scores of your most <i>recent</i> professional entry exam. Please enter all that apply.</span> <br/>

          <div className={s.left1}>
              <label htmlFor="MCAT">MCAT: <br></br></label>
              <input
                type="text"
                id="MCAT"
                name="mcat"
                size = "25"
                value={formData.mcat}
                onChange={e=> onChange(e)}
                title="Please enter only numeric characters for MCAT"
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
                title="Please enter only numeric characters for DAT"
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
                title="Please enter only numeric characters for OAT"
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
                title="Please enter only numeric characters for GRE"

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
        <div className={s.apply} style={{marginTop:'-55px'}}>
          <div>
            <label htmlFor="medicalFields">Select Medical Field(s):</label>
          </div>
          <div>
            <div className={s.column_left}>
              <div>
                <label htmlFor="medicalField1">
                  <input type="checkbox" 
                  id="medicalField1"  
                  name="medicalField1"
                  value={!isChecked1}
                  checked={isChecked1}
                  onChange={e => {
                    handleChange1();
                    onChange(e);
                    
                    }} />
                  <span>  Medical Application</span>
                </label>
              </div>
              <div>
                <label htmlFor="medicalField2">
                  <input type="checkbox" 
                  id="medicalField2"
                  name="medicalField2"
                  value={!isChecked2}
                  checked={isChecked2}
                  onChange={e => {
                    handleChange2();
                    onChange(e);
                    
                    }} />
                  <span> Osteopathic Medical Application</span>
                </label>
              </div>
              <div>
                <label htmlFor="medicalField3">
                  <input 
                  type="checkbox" 
                  id="medicalField3"
                  name="medicalField3"
                  value={!isChecked3}
                  checked={isChecked3}
                  onChange={e => {
                    handleChange3();
                    onChange(e);
                    
                    }} />
                  <span>  Physician Assistant Application</span>
                </label>
              </div>
            </div>
            <div className={s.column_right}>
              <div>
                <label htmlFor="medicalField4">
                  <input type="checkbox"                   
                  id="medicalField4"
                  name="medicalField4"                  
                  value={!isChecked4}
                  checked={isChecked4}
                  onChange={e => {
                    handleChange4();
                    onChange(e);
                    
                    }} />
                  <span>  Dental Application</span>
                </label>
              </div>
              
              <div>
                <label htmlFor="medicalField5">
                  <input type="checkbox"
                  id="medicalField5"   
                  value={!isChecked5}
                  name="medicalField5"
                  checked={isChecked5}
                  onChange={e => {
                  handleChange5();
                  onChange(e);
                  
                  }} />
                  <span>  Other Application (e.g. Podiatry)</span>
                </label>
              </div>
            </div>
          </div>
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
          <label htmlFor="facultyEval1">Faculty Email 1<br></br></label> 
              <input
                type="text"
                id="facultyEval1"
                name="facultyEval1"
                value={formData.facultyEval.split(',')[0]}
                onChange={e => setFormData({...formData, facultyEval: e.target.value + ',' + formData.facultyEval.split(',')[1]})}
              /> 
            <label htmlFor="facultyEval2">Faculty Email 2<br></br></label> 
              <input
                type="text"
                id="facultyEval2"
                name="facultyEval2"
                value={formData.facultyEval.split(',')[1]}
                onChange={e => setFormData({...formData, facultyEval: formData.facultyEval.split(',')[0] + ',' + e.target.value})}
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
      </div>
    </body>
    )}
    </>
  );  
};

ApplicationForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  saveProfile: PropTypes.object.isRequired,
  requestFacultyForms: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile, auth:state.auth
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile , saveProfile, requestFacultyForms })(
  ApplicationForm
);