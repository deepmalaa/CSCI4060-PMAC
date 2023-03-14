import React from 'react';
import s from '../styles/HomePage.module.css';
import campus from '../img/HomePage/campus.jpg';
import whiteFile from '../img/HomePage/fileSymbolWhite.png';
import profile from '../img/HomePage/Profile.png';
function FormOne() {
    return ( 

        <div className={s.container}>
            
            <div className={s.navBar}>
                <div className={s.goldBars}> </div>
                    <div className={s.whiteBar}>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#news">News</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#about">About</a></li>
                        </ul>

                    </div>
                <div className={s.goldBars}> </div>
            </div>

            <div className={s.picture}>
                <img src={campus} alt="file submit"/>
                <div className={s.goldBars}> </div>
            </div>
            
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

            <div className={s.contentBoxG}>
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
                        Mr. Joshua Gann Dr. Ron Hil - Dr. Siva Murru - Dr. Matt Overturf 
                        <br/>
                        Ms. Kristin Chandler - Dr. Allison Wiedemeier
                    </span>
                </div>
            </div>

            <div className={s.contentBoxG}>
            
            </div>
            {/* break */}





        </div>



            )

}

export default FormOne;