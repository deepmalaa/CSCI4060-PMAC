import React, { useEffect  } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import s from '../styles/StudentLanding.module.css';
import CheckList from '../components/layout/CheckList';
import Sidebar from '../components/layout/Sidebar';
import bottomBanner from '../img/HomePage/library.jpg';
import student from '../img/landingPages/student.jpg';
import StatusBar from '../components/layout/StatusBar';

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
        <Sidebar role="student" />
        <div className = "dashboard ">Welcome {user && user.name}</div>
        <div className = "StudentPage1">    
          
        
       
        <div className={s.container}>
        <div className={s.StudentPage1}>    
          
        </div>    
            <div className={s.navBar}>
                <div className={s.goldBars}> </div>
                      <div className={s.whiteBar}>
                          <ul>
                              <li><a href="/dashboardStudent">Home</a></li>
                              <li><a href="/StudentContactPage">Contact</a></li>
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


            <div className={s.contentBox1}>

              <div className={s.grayLeft}>
                <div className={s.textTitle1}>HOW TO APPLY</div>
                
                <div className={s.textBox1}>

                  The committee is available to interview students during their 
                  application process. Each student that wishes to be interviewed 
                  by the committee must fill out a set of forms to set up an interview. 


                </div>
                <div className={s.textBox2}>

                  1. Navigate to 'Waiver Form' in the sidebar. Be sure to fill out all necessary information and then click 'Submit'.


                </div>
                <div className={s.textBox2}>

                  2. Navigate to 'Application Form' in the sidebar. Be sure to fill out all necessary information and then click 'Submit'.


                </div>

                <div className={s.textBox2}>

                  3. Once both forms have been submitted, navigate to 'Status' in the Sidebar. From here, you can see your progress in the application process, as well as, schedule your times for interview.


                </div>

                <div className={s.textBox2}>

                  4. After scheduling your times, you may need to wait for your interview to be scheduled.


                </div>

                <div className={s.textBox2}>

                  5. You can always check the status of your interview by navigating to 'Status' in the sidebar.


                </div>
                
              </div>

              <StatusBar/>

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
                    <a className={s.FQA} href="/StudentQuestionsPage">
                        <div>Frequent Questions</div>
                    </a>
                {/*</div>*/}

                {/* goldBar */}
                
            </div>

            <div className={s.redBar}></div>

        </div>
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
