import React from 'react';

import css from '../styles/QuestionsPage.module.css';



function Questions() {
    return (
        <div className={css.container}> 
            <div className={css.navBar}>
                <div className={css.goldBars}> </div>
                    <div className={css.whiteBar}>
                        <ul>
                            <li><a href="/dashboardStudent">Home</a></li>
                            <li><a href="/StudentContactPage">Contact</a></li>            
                        </ul>

                    </div>
                <div className={css.goldBars}> </div>
            </div>

            <div className={css.contentBoxW}>
                <div className={css.textTitle}>
                    Frequently Asked Questions

                </div>  
                <div className={css.goldBar2}> </div>


                <div className={css.textBox}>

                    <span className={css.questionsBox}>Q. What is the purpose of the Committee? </span>
                    <br/>
                    <br/>
                    <div className={css.answersBox}> 
                    Faculty members from across ULM's campus comprise the Pre-Medical Advisory Committee. 
                    The faculty members work with pre-medical students during their junior and senior year 
                    at ULM to prepare for the Medical School application process. Students from multiple
                     disciplines can take advantage of the committee. Any student applying to Medical 
                     School, Dental School, Physician Assistant School, Physical Therapy, Occupational 
                     Therapy, Optometry School or Veterinary School can utilize the committee. </div>

                    <br/>


                    <span className={css.questionsBox}>Q. When should I apply to the Committee? </span>
                    <br/>
                    <br/>
                    <div className={css.answersBox}> 
                    Students that are applying early decision to medical school, dental school or physician 
                    assistant schools should interview in the Spring semester. Regular admission candidates 
                    for medical school should interview in the Fall semester. </div>
                    
                    <br/>

                    <span className={css.questionsBox}>Q. When should I have my forms submitted? </span>
                    <br/>
                    <br/>
                    <div className={css.answersBox}> 
                    To be interviewed in the Fall semester of any academic year, 
                    all forms must be submitted between the beginning of school and October 1.   
                    To be interviewed in the Spring semester of any academic year, 
                    all forms must be between January 15 and Febuary 15. </div>

                    <br/>

                    <span className={css.questionsBox}>Q. How do I know if I have completed all of my forms? </span>
                    <br/>
                    <br/>
                    <div className={css.answersBox}> 
                    When logged in, navigate to the 'status' page from the side navigation bar. 
                    From there, you will be able to see what stage of the application process you are in, 
                    additionally; you will see any information or forms that are missing. </div>

                    <br/>

                    <span className={css.questionsBox}>Q. What is the process of the interview? </span>
                    <br/>
                    <br/>
                    <div className={css.answersBox}> 
                    Each interview will last one hour. At the conclusion of the interview, the committee will meet 
                    with each candidate. A formal letter of evaluation will be written and can be used in support of
                    each student's application. Many medical schools prefer committee letters of evaluation. 
                    It is the student's responsibility to determine if committee letters are preferred. </div>

                    <br/> 


                    <span className={css.questionsBox}>Q. What do I do I've submitted the wrong information in my forms? </span>
                    <br/>
                    <br/>
                    <div className={css.answersBox}> 
                    You can always change or update your form information. When logged in to your student account, 
                    navigate to 'Application Form' and change your information as needed.  Note that if this is done too 
                    late, your changes may not be seen and taken in account for the Interview. If you feel that you need 
                    to make changes close to deadline, be sure to visit our contact page and inform Dr. Wiedemeier of
                     these changes via email. </div>


                </div>
            </div>

            <div className={css.foot}>
                <a href="https://www.ulm.edu/">@ The University of Louisiana Monroe</a>
            </div>

        </div>
    )
} 

export default Questions;