import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import Sidebar from '../components/layout/Sidebar';
import building from '../img/HomePage/brassEagle.jpg';
import s from '../styles/ChairLanding.module.css';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import StudentProfile from '../components/layout/StudentProfile';
import whiteFile from '../img/HomePage/fileSymbolWhite.png';

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h6">Status Check</Popover.Header>
    <Popover.Body>
      Website is <strong>functional</strong> and running!
    </Popover.Body>
  </Popover>
);

const ChairLanding = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <>
      <Sidebar role="admin" />
      
      <div className={s.container}> 
      
        <div className={s.navBar}>
            <div className={s.goldBars}> </div>
                <div className={s.whiteBar}>
                    <ul>
                        <li><a href="/HomePage">Home</a></li>
                        <li><a href="/createAccount">Create Account</a></li>
                        <li><a href="/ContactPage">Contact</a></li>
                        <li><a href="#Help">Help</a></li>
                    </ul>
                </div>
            <div className={s.goldBars}> </div>
        </div>

        <div className={s.picture}>
                <img src={building} alt="building picture" className={"pic"}/>
                
        </div>
      
      {/* Text content for Picture*/}
      <div className={s.floating}> 
            
            C H A I R 
          
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


        <div className={s.contentBoxW}>
        <div className={s.textTitle}>
            Chair Page for ULM PMAC

        </div>

        <div className={s.textBox}>
          ULM PMAC admin page is a web-based interface designed to manage the ULM PMAC system. 
          It provides the administrators with the ability to perform various tasks such as managing 
          user accounts, monitoring system performance, configuring system settings, managing data backups,
          and more. The admin page allows the ULM PMAC system to be easily managed, ensuring smooth and 
          efficient system operation.
        </div>

      </div>

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
                    <li><a href="https://www.ulm.edu/" target="_blank">ULM</a></li>
                    <li><a href="https://outlook.office.com/mail/" target="_blank">Outlook</a></li>
                    <li><a href="/EvaluationSelectUser">Evaluate Student Interview</a></li>
                </ul>
              </div>

            </div>
            {/* break */}

            

                
            


      </div>
    </>
  );
};

ChairLanding.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(
  ChairLanding
);
