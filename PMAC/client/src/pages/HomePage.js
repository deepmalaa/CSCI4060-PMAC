import React from 'react';
import s from '../styles/HomePage.module.css';
import whiteFile from '../img/HomePage/fileSymbolWhite.png';
import profile from '../img/HomePage/Profile.png';

//import campus from '../img/HomePage/Best.jpg';
import campus from '../img/HomePage/Fire.jpg';

import bottomBanner from '../img/HomePage/library.jpg';
import Sidebar from '../components/layout/Sidebar';
import jwt from 'jwt-decode';
import { connect } from 'react-redux';

function FormOne({isAuthenticated}) {

    var link = "/HomePage";
    var name = "Home";
    if(isAuthenticated){
        const user = jwt(localStorage.token);
        console.log(user.role);
        if(user.user.role === "Student") {
           link = "/dashboardStudent" ;
           name = "Student Home"; }
        if(user.user.role === "Committee") {
           link ="/dashboardCommittee";
           name = "Committee Home"; }
        if(user.user.role === "admin") {
          link ="/dashboardChair";
          name = "Admin Home"; }
      }

    return ( 
        
        <div className={s.container}>
            
            <div className={s.navBar}>
                <div className={s.goldBars}> </div>
                    <div className={s.whiteBar}>
                        <ul>
                            <li><a href= {link} >{name}</a></li>
                            <li><a href="/createAccount">Create Account</a></li>
                            <li><a href="#interview">Interview Process</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                
            </div>
            <div className={s.goldBars}> </div>
            <div className={s.picture}>
            
                <img src={campus} alt="campus picture" className={s.pic}/>
                
                <Sidebar role="guest" />
            </div>

            {/* Text content for Picture*/}
            <div className={s.floating}> 
            
            P M A C
          
            <div className={s.textBoxCenter}>
                WHERE YOUR JOURNEY BEGINS
                <br/>
                <br/>
                <hr/>
            </div>
            <br/>
            <div className={s.textBoxCenter2}>
                A resource for students who want to take their career to the next step.<br/>
                A place for students to evaluate and test their skills.
            </div>


            </div>

            <div className={s.goldBars}> </div>
            <div className={s.contentBoxW}>
                <div className={s.textTitle}>
                    Our Purpose

                </div>

                <div className={s.textBox}>
                    Faculty members from across ULM's campus comprise the Pre-Medical 
                    Advisory Committee. The faculty members work with pre-medical students 
                    during their junior and senior year at ULM to prepare for the Medical 
                    School application process. 
                    <br/>
                    <br/>
                    Students from multiple disciplines can take advantage of the 
                    committee. Any student applying to Medical School, Dental School, 
                    Physician Assistant School, Physical Therapy, Occupational 
                    Therapy, Optometry School or Veterinary School can utilize 
                    the committee.
                </div>
            </div>
            {/* break */}

            <div id="interview" className={s.contentBoxG}>
                <div className={s.textTitle}>
                    The Interview Process
                </div>

                <div className={s.textBox}>
                Each interview will last one hour. At the conclusion of the 
                interview, the committee will meet with each candidate. A 
                formal letter of evaluation will be written and can be used 
                in support of each student's application. Many medical 
                schools prefer committee letters of evaluation. It is the 
                student's responsibility to determine if committee letters 
                are preferred.
                </div>
            </div>
            {/* break */}

            <div className={s.contentBoxW}>
                <div className={s.goldBoxLeft}>
                    <img src={whiteFile} alt="file symbol"/>
                    <br/>
                    <span>
                        ULM Quick Links
                        <br/>
                        <br/>
                        <a href="https://www.ulm.edu/biology/">ULM Biology Home Page</a>
                        <br/>
                        <a href="http://catalog.ulm.edu/index.php?catoid=34">ULM Pre-medicine Catalog Page</a>
                        <br/>
                        <a href="http://catalog.ulm.edu/preview_program.php?catoid=34&poid=3988&hl=Biology+Premed+Concentratino&returnto=search">ULM premedical Studies Biology Concentration Catalog Page</a>
                        <br/>
                        <a href="http://catalog.ulm.edu/preview_program.php?catoid=34&poid=3797&hl=Biology&returnto=search">ULM Biology Catalog Page</a>
                    </span>
                    
                </div>

                <div className={s.goldBoxRight}>
                    <img src={profile} alt="file symbol"/>
                    <br/>
                    <span>
                        Our ULM PMAC Committee Members 2022-2023
                        <br/><br/>
                        Dr. Burton Ashworth - Dr. Kristi Davis - Dr. El-Giar
                        <br/>
                        Mr. Joshua Gann - Dr. Ron Hil - Dr. Siva Murru - Dr. Matt Overturf 
                        <br/>
                        Ms. Kristin Chandler - Dr. Allison Wiedemeier
                    </span>
                </div>
            </div>
            {/* break */}

            <div className={s.contentBoxG}>
                <div className={s.textTitle}>
                    APPLY TO THE COMMITTEE
                </div>

                <div className={s.textBox}>
                    The committee is available to interview students during their 
                    application process. Each student that wishes to be interviewed 
                    by the committee must create a student account and complete
                    the required application forms to set an appointment. 
                </div>
            </div>
            {/* break */}

            <div className={s.goldBars}> </div>
            <div id="contact" className={s.bottomBanner}>
                <div className={s.img}>
                    <img src={bottomBanner} alt="Backdrop of ULM Campus"/>  
                </div>

                <div className={s.bottomTitle}>
                    REQUEST MORE INFORMATION    
                </div>
    
                <div className={s.bottomText}>
                    If you want to know more about the PMAC committe, 
                    please <a className={s.contact} href = "mailto: awiedemeier@ulm.edu"><br/>CONTACT US</a> or see our frequently asked questions page   
                </div>
                
                {/*<div className={s.FQA}>*/}
                    <a className={s.FQA} href="/QuestionsPage">
                        <div>Frequent Questions</div>
                    </a>
                {/*</div>*/}

                {/* goldBar */}
                
            </div>

            <div className={s.foot}>
                <a href="https://www.ulm.edu/">@ The University of Louisiana Monroe</a>
            </div>

            <div className={s.redBar}></div>

        </div>



            )

}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps)(FormOne);