import React, { useEffect  } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import s from '../styles/StudentLanding.module.css';
import CheckList from '../components/layout/CheckList';
import Sidebar from '../components/layout/Sidebar';
import bottomBanner from '../img/HomePage/library.jpg';
import student from '../img/landingPages/student.jpg';
import Status from '../components/layout/StatusBar';

const StudentLanding = ({
    getCurrentProfile,
    auth: { user },
    profile: { profile }
  }) => {
    useEffect(() => {
      getCurrentProfile();
    }, [getCurrentProfile]);
    return (
        <>
        
        
        
        
        <div className={s.container}>
        <div className={s.StudentPage1}>    
          <Sidebar />
          
        </div>    
            <div className={s.navBar}>
                <div className={s.goldBars}> </div>
                      <div className={s.whiteBar}>
                          <ul>
                              <li><a href="#Home">Home</a></li>
                              <li><a href="#account">Account</a></li>
                              <li><a href="#contact">Contact</a></li>
                              <li><a href="#Help">Help</a></li>
                          </ul>

                      </div>
                <div className={s.goldBars}> </div>
            </div>

            <div className={s.picture}>
                <img src={student} alt="file submit"/>
                <div className={s.goldBars}> </div>
            </div>

            <div className={s.contentBox}>
                <div className={s.textTitle}>
                    Applicant Page
                    <br/>
                    Welcome {user && user.name}
                    
                </div>
                
                <div className={s.textBox}>
                  
                  Students that are applying early decision 
                  to medical school, dental school or physician 
                  assistant schools should interview in the Spring 
                  semester. Regular admission candidates for 
                  medical school should interview in the Fall 
                  semester.
                  
                </div>
                
            </div> 
            {/* break */}


            <div className={s.contentBox}>

              <div className={s.grayLeft}>
                <div className={s.textTitle}>HOW TO APPLY</div>
                
                <div className={s.textBox}>
                  <p>
                  The committee is available to interview students during their 
                  application process. Each student that wishes to be interviewed 
                  by the committee must fill out a set of forms to set up an interview. 

                  
                  </p>
                </div>
              </div>

              <div className={s.grayRight}>
                <span>Status</span>
                <ul>
                  <li><a href="#Home">Application Form</a></li>
                  <li><a href="#account">Release Form</a></li>
                  <li><a href="#contact">Personal Statement</a></li>
                  <li><a href="#Help">Unofficial Transcript</a></li>
                  <li><a href="#Home">Schedule</a></li>
                  <li><a href="#account">Photo</a></li>
                  <li><a href="#contact">ACMAS (if applicable)</a></li>
                  <li><a href="#Help">Recommendation Letter</a></li>
                </ul>
              </div>

            </div>
            <div className={s.contentBox}></div>

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
                    <a className={s.FQA} href="https://www.ulm.edu/biology/">
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

StudentLanding.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired


  };

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
  });

export default connect(mapStateToProps, { getCurrentProfile})(
  StudentLanding
  
);