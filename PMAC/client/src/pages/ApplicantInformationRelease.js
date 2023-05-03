import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import {Link, Navigate} from 'react-router-dom';
import {setAlert} from '../actions/alert';
import {applicantRelease} from '../actions/applicantRelease';
import propTypes from 'prop-types';
import s from '../styles/ApplicantInformation.module.css';
import { getCurrentProfile } from '../actions/profile';
import Sidebar from '../components/layout/Sidebar';

const initialState ={
    authorize:"",
    evaluate:"",
    name_release:"",
    name: "",
    cwid: "",
    signature:"",
    date: ""
}

const ApplicantInformation =({applicantRelease, getCurrentProfile,
    auth: { user },
    profile: { profile, loading }
  }) => {
    
   

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        initialState
    });

    useEffect(() => {
        if (!profile) getCurrentProfile();

        if (!loading && profile) {
            setFormData({authorize:"",
            evaluate:"",
            name_release: profile.fname +" "+  profile.mname +" "+ profile.lname,
            name: profile.fname +" "+  profile.mname +" "+ profile.lname,
            cwid: profile.cwid,
            signature: profile.fname +" "+  profile.mname +" "+ profile.lname,
            date: ""})
        }
      }, [getCurrentProfile, loading]); 

      const [isShown, setIsShown] = useState(false);

    const onChange = e =>setFormData({...formData,[e.target.name]:e.target.value});
    const onSubmit = async (e) =>{
        e.preventDefault();
        applicantRelease(formData);
        setIsSubmitted(true);
      }

      if(isSubmitted){
        return <Navigate to ="/dashboardStudent" />
        }

    return (    
        <>
            <Sidebar role="student" />
            <body>
                
                <div className={s.body}>
                    <div className={s.top}>
                        <div className={s.goldBars}> </div>
                            <div className={s.whiteBar}>
                                <ul>
                                    <li><a href="/dashboardStudent">Home</a></li>
                                </ul>

                            </div>
                        <div className={s.goldBars}> </div>
                    </div>

                    <button
            className={s.buttonCust1}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
          </button>
          {isShown && (
            <div className={s.hoverContent1}>
              <div className={s.hoverHead}> 
                Help
              </div>
              <div className={s.hoverText}>
                - This page is what allows the Pre-Medical Advisory Committee to have access to your school info.
              </div>

              <div className={s.hoverText}>
                - This form should be submitted before anything else is completed. If this form is not submitted,
                your interview process may be delayed or cancelled.
              </div>

            </div>
          )}
                
                    <div className={s.title}> ULM Pre-Medical Advisory Committee Release Form</div>
                        <div className={s.instructions}>
                            
                            By providing my name and other form information, I understand I am agreeing to the following statments. I understand members of the Pre-Medical Advisory Committee have access to my transcript, test scores,
                            personal statement and faculty evaluations submitted on my behalf. I understand that the committee evaluation
                            will be based on the submitted faculty evaluations, transcript(s), test scores, a personal statement, and the
                            committee interview. I, as the applicant, have made every effort to provide the committee with the full and correct
                            address where the evaluation letter for the pre-medical committee should be mailed, understanding that this may
                            not be the general address for the school in most cases.
                            

                            
                        </div>

                        <div className={s.subInstructions}>Please check the box for all that you agree to:</div>
                            <form onSubmit={e => onSubmit(e)} className={s.form1} onChange={e=> onChange(e)}
                required>
                            <div className={s.entire}> 
                            <label>
                                <input type="checkbox" name="authorize" value="true"/>
                                I hereby authorize the Pre-Medical Advisory Committee of the University of Louisiana at Monroe
                                to release the evaluation of the undersigned to the below listed professional schools and/or programs.
                            </label>

                            <label >
                                <input type="checkbox" name="evaluate" value="true" onChange={e=> onChange(e)}
                required/>
                                            I will allow the committee members to evaluate my performance based on my academic record,
                                submitted materials, and the committee interview. I authorize the committee to prepare an evaluation
                                letter for me for the purposes of applying to the professional schools and/or programs listed below. I
                                understand that their evaluation and all items considered in making this recommendation are
                                confidential and I waive my right to see such evaluation.
                            </label>

                            <label>
                                <input type="checkbox" name="name_release" value="true" onChange={e=> onChange(e)}
                required/>
                                    I will allow my name to be released to the University if accepted to a professional school. The
                                    University may use my name and the name of the professional school/ and or program for statistics and
                                    recruitment endeavors. These statistics will be gathered for the Biology Program, Pre-Medical Interview
                                    Committee and the University of Louisiana at Monroe.
                            </label>
                        <div className={s.left}>
                            <label>
                                Name: <input 
                                type="text" 
                                name="signature" 
                                value={formData.signature} 
                                onChange={e=> onChange(e)}
                                required/>
                            </label>
                        </div>

                        <div className={s.left}>
                            <label>
                                CWID Number: <input 
                                type="text" 
                                name="cwid" 
                                value={formData.cwid}
                                onChange={e=> onChange(e)}
                                required/>
                            </label>
                        </div>

                        <div className={s.left}> 
                            <label>
                                Date: <input 
                                type="date" 
                                name="date" 
                                value={formData.date} 
                                onChange={e=> onChange(e)}
                                required/>
                            </label>
                        </div>

                        <div className={s.clear}> </div>


                            <span className={s.note}>Please provide the physical addresses of each school you are applying to if those schools require individual letters. If you are using an application system, please list the School and then the Application service.</span>
                            <span className={s.note}>All deadlines for all schools need to be listed. Most schools have two deadline dates. Please provide the letter deadline date.</span>

                            <div className={s.clear}> </div>
                        
                            <div className={s.left2}>
                            <label for="school1">Name of School, Contact Person and Address</label>
                            <input type="text" id="school1" name="school1"/>
                            </div>
                            
                            <div className={s.left}> 
                            <label for="deadline1">Letter Deadline Date:</label>
                            <input type="text" id="deadline1" name="deadline1"/>
                            </div>
                            
                            <div className={s.clear}> </div>

                            <div className={s.left2}>
                            <label for="school2">Name of School, Contact Person and Address</label>
                            <input type="text" id="school2" name="school2"/>
                            </div>
                            <div className={s.left}> 
                            <label for="deadline2">Letter Deadline Date:</label>
                            <input type="text" id="deadline2" name="deadline2"/>
                            </div>
                            
                            <div className={s.clear}> </div>

                            <div className={s.left2}>
                            <label for="school3">Name of School, Contact Person and Address</label>
                            <input type="text" id="school3" name="school3"/>
                            </div>
                            <div className={s.left}> 
                            <label for="deadline3">Letter Deadline Date:</label>
                            <input type="text" id="deadline3" name="deadline3"/>
                            </div>

                            <div className={s.clear}> </div>

                            <div className={s.left2}>
                            <label for="school4">Name of School, Contact Person and Address</label>
                            <input type="text" id="school4" name="school4"/>
                            </div>
                            <div className={s.left}> 
                            <label for="deadline4">Letter Deadline Date:</label>
                            <input type="text" id="deadline4" name="deadline4"/>
                            </div>
                            
                            <div className={s.clear}> </div>

                            <div className={s.left2}>
                            <label for="school5">Name of School, Contact Person and Address</label>
                            <input type="text" id="school5" name="school5"/>
                            </div>
                            <div className={s.left}> 
                            <label for="deadline5">Letter Deadline Date:</label>
                            <input type="text" id="deadline5" name="deadline5"/>
                            </div>
                            
                            <div className={s.clear}> </div>

                            <div className={s.left2}>
                            <label for="school6">Name of School, Contact Person and Address</label>
                            <input type="text" id="school6" name="school6"/>
                            </div>
                            <div className={s.left}> 
                            <label for="deadline6">Letter Deadline Date:</label>
                            <input type="text" id="deadline6" name="deadline6"/>
                            </div>
                            <div className={s.clear}> </div>
                        </div>
                        <div >
                            <button type="submit" style={{ fontSize: 20, width: 150, height: 50 }}>
                                Submit
                            </button>
                        </div>
                        

                </form>
                </div>
            </body>
        </>
        )
    };

    ApplicantInformation.propTypes ={
        setAlert: propTypes.func.isRequired,
        applicantRelease:propTypes.func.isRequired,
        auth: propTypes.object.isRequired,
        profile: propTypes.object.isRequired
      }

    const mapStateToProps = (state) => ({
        auth: state.auth,
        profile: state.profile

      });
    
      export default connect(mapStateToProps, {setAlert, applicantRelease, getCurrentProfile})(ApplicantInformation);