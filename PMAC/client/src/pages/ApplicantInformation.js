import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import {Link, Navigate} from 'react-router-dom';
import {setAlert} from '../actions/alert';
import {applicantInformation} from '../actions/applicantInformation';
import propTypes from 'prop-types';
import s from '../styles/ApplicantInformation.module.css';
import { getCurrentProfile } from '../actions/profile';
import Sidebar from '../components/layout/Sidebar';


const ApplicantInfo =({applicantInformation, getCurrentProfile,
    auth: { user },
    profile: { profile }


}) =>{
    useEffect(() => {
        getCurrentProfile();
      }, [getCurrentProfile]); 

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullname: profile.fname,
        date:"",
        cwid:"",
        address:"",
        cellphone:"",
        ulmEmail:"",
        altEmail:"",
        major:"",
        minor:"",
        expectedGraduation:"",
        collegiateGpa:"",
        proposedEntrance:"",
        examScores:"",
        examDate:"",
        schoolApplication:"",
        AMCASletterID:""
    });

    const onChange = e =>setFormData({...formData,[e.target.name]:e.target.value});
    const onSubmit = async (e) =>{
        e.preventDefault();
        applicantInformation(formData);
        setIsSubmitted(true);
      }

      if(isSubmitted){
        return <Navigate to ="/dashboardStudent" />
        }

    return (
    
        <body>
            <Sidebar role="student" />
            <div className={s.body}>
            <div className={s.subTitle}>Applicant Information Form</div>

                <form onSubmit={e => onSubmit(e)} className={s.form} onChange={e=> onChange(e)}
          required>
                    <label>Full Name (Print):</label>
                    <input type="text" name="fullname" value={formData.fullname} onChange={e=> onChange(e)}
          required/>  

                    <label>Date:</label>
                    <input type="date" name="date" value={formData.date} onChange={e=> onChange(e)}
          required/>

                    <label>ULM CWID #:</label>
                    <input type="text" name="cwid" value={formData.cwid} onChange={e=> onChange(e)}
          required/>

                    <label>Local Address:</label>
                    <input type="text" name="address" value={formData.address} onChange={e=> onChange(e)}
          required/>

                    <label>Cell Phone:</label>
                    <input type="tel" name="cellphone" value={formData.cellphone} onChange={e=> onChange(e)}
          required/>

                    <label>ULM E-mail Address:</label>
                    <input type="email" name="ulmEmail" value={formData.ulmEmail} onChange={e=> onChange(e)}
          required/>

                    <label>Alternative e-mail address that can be used upon graduation:</label>
                    <input type="email" name="altEmail" value={formData.altEmail} onChange={e=> onChange(e)}
          required/>

                    <label>Major(s):</label>
                    <input type="text" name="major" value={formData.major} onChange={e=> onChange(e)}
          required/>

                    <label>Minor(s):</label>
                    <input type="text" name="minor" value={formData.minor} onChange={e=> onChange(e)}
          required/>

                    <label>Date of Expected Graduation from ULM:</label>
                    <input type="date" name="expectedGraduation" value={formData.expectedGraduation} onChange={e=> onChange(e)}
          required/>

                    <label>Overall Collegiate GPA:</label>
                    <input type="text" name="collegiateGpa" value={formData.collegiateGpa} onChange={e=> onChange(e)}
          required/>

                    <label>Date of Proposed Entrance to Professional School:</label>
                    <input type="date" name="proposedEntrance" value={formData.proposedEntrance} onChange={e=> onChange(e)}
          required/>

                    <label>Score of your most recent professional entry exam (MCAT, DAT, OAT, GRE). Please include your breakdown scores:</label>
                    <input type="text" name="examScores" value={formData.examScores} onChange={e=> onChange(e)}
          required/>

                    <label>Date of exam taken or expected date of exam:</label>
                    <input type="date" name="examDate" value={formData.examDate} onChange={e=> onChange(e)}
          required/>

                    <label>Type of School Application will be sent:</label>
                    <input type="text" name="schoolApplication" value={formData.schoolApplication} onChange={e=> onChange(e)}
          required/>

                    <label>AMCAS Letter ID:</label>
                    <input type="text" name="AMCASletterID" value={formData.AMCASletterID} onChange={e=> onChange(e)}
          required/>

                    <div>
                        <button type="submit" style={{ fontSize: 20, width: 150, height: 50 }}>
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        </body>

    )
    };

    ApplicantInfo.propTypes ={
        setAlert: propTypes.func.isRequired,
        applicantInformation:propTypes.func.isRequired,
        auth: propTypes.object.isRequired,
        profile: propTypes.object.isRequired
      }

      const mapStateToProps = (state) => ({
        auth: state.auth,
        profile: state.profile
      });


      export default connect(mapStateToProps, {setAlert, applicantInformation, getCurrentProfile})(ApplicantInfo);