import React, { useEffect  } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import s from '../styles/CommitteeMemberLanding.module.css';
import CheckList from '../components/layout/CheckList';
import Sidebar from '../components/layout/Sidebar';
import bottomBanner from '../img/HomePage/library.jpg';
import medical from '../img/HomePage/Cover3.jpg';

const CommitteeMemberLanding = ({
    getCurrentProfile,
    auth: { user },
    profile: { profile }
  }) => {
    useEffect(() => {
      getCurrentProfile();
    }, [getCurrentProfile]);
    return (
        <>
        
        
        
        <Sidebar role="committe" />
        <div className={s.container}>
        <div className={s.StudentPage1}>    
          
        </div>    
            <div className={s.navBar}>
                <div className={s.goldBars}> </div>
                      <div className={s.whiteBar}>
                          <ul>
                              <li><a href="/dashboardCommittee">Home</a></li>
                              <li><a href="/CommitteeContactPage">Contact</a></li>
                          </ul>

                      </div>
                <div className={s.goldBars}> </div>
            </div>

            <div className={s.picture}>
                <img src={medical} alt="file submit"/>
                <div className={s.goldBars}> </div>
            </div>

            {/* Text content for Picture*/}
            <div className={s.floating}> 
            
            C O M M I T T E E 
          
            <div className={s.textBoxCenter}>
                A PRE - MEDICAL RESOURCE
                <br/>
                <br/>
                <hr/>
            </div>
            <br/>
            <div className={s.textBoxCenter2}>
            A tool to simplify your work, so you can concentrate on what matters most...<br/>
                Changing your students' lives daily.
            </div>


            </div>


            <div className={s.goldBars}> </div>
            <div className={s.contentBox}>
                <div className={s.textTitle}>
                    Committee Page
                    <br/>
                    Welcome {user && user.name}
                    
                </div>
                
                <div className={s.textBox}>
                  
                Faculty members from across ULM's campus comprise the 
                Pre-Medical Advisory Committee. The faculty members work 
                with pre-medical students during their junior and senior 
                year at ULM to prepare for the Medical School application 
                process. Students from multiple disciplines can take 
                advantage of the committee. Any student applying to 
                Medical School, Dental School, Physician Assistant School, 
                Physical Therapy, Occupational Therapy, Optometry School or 
                Veterinary School can utilize the committee.
                  
                </div>
                
            </div> 
            {/* break */}


            <div className={s.contentBox}>

              <div className={s.grayLeft}>
                <div className={s.textTitle1}>What can I do?</div>
                
                <div className={s.textBox1}>
                  <b>1.</b> Be sure to schedule the times you are available for a student's interview. 
                  Navigate to your sidebar and click on 'Scheduling Calendar'. Follow the instructions,
                  and this will allow the Committee Chair to start scheduling you for interviews.
                </div>

                <div className={s.textBox1}>
                  <b>2.</b> You can review student's submitted applications by navigating to your sidebar
                  and clicking on 'Review Applications'.
                </div>

                <div className={s.textBox1}>
                  <b>3.</b> You can submit your evaluation for student's that have completed their interviews.
                  Navigate to your sidebar and click on 'Interview Evaluation'
                </div>

              </div>

              <div className={s.grayRight}>
                <span>Links</span>
                <ul>
                    <li><a href="/reviewApplications">Review Applications</a></li>
                    <li><a href="/CommitteeCalendar">Scheduling Calendar</a></li>
                    <li><a href="/EvaluationSelectUser">Evaluate Student Interview</a></li>
                </ul>
              </div>

            </div>
            <div className={s.contentBox}></div>
            <div className={s.goldBars}></div>
            <div className={s.bottomBanner}>
            
                <div className={s.img}>
                    <img src={bottomBanner} alt="Backdrop of ULM Campus"/>  
                </div>

                <div className={s.bottomTitle}>
                    REQUEST MORE INFORMATION    
                </div>
    
                <div className={s.bottomText}>
                    If you want to know more about the PMAC committe, 
                    please contact us or see our frequently asked questions page   
                </div>
                
                {/*<div className={s.FQA}>*/}
                    <a className={s.FQA} href="/CommitteeQuestionsPage">
                        <div>Frequent Questions</div>
                    </a>
                {/*</div>*/}

                {/* goldBar */}
                
            </div>

            <div className={s.redBar}></div>

        </div>
        </>
    )
};

CommitteeMemberLanding.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
  });

export default connect(mapStateToProps, { getCurrentProfile })(
  CommitteeMemberLanding
);