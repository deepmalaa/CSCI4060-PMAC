import React from 'react';
import wied from '../img/HomePage/drwied.jpg';
import email from '../img/HomePage/email.png';
import qmark from '../img/HomePage/qmark.png';


import css from '../styles/ContactPage.module.css';



function Contact() {
    return (
        <div className={css.container}> 
            <div className={css.navBar}>
                <div className={css.goldBars}> </div>
                    <div className={css.whiteBar}>
                        <ul>
                            <li><a href="/HomePage">Home</a></li>
                            <li><a href="#news">Create Account</a></li>
                            <li><a href="#contact">Contact</a></li>
                            
                            <li><a href="#Help">Help</a></li>
                        </ul>

                    </div>
                <div className={css.goldBars}> </div>
            </div>

            <div className={css.contentBoxW}>


                <div className={css.textTitle}>
                    Contact Us!
                </div>  
                <div className={css.goldBar2}> </div>

                <div className={css.contactBox}>
                    <div className={css.picture}>
                        <img src={wied} alt="Dr. Wiedemeier Contact"/>
                    </div>
                    <br/>
                    <div className={css.contactText}>
                        Any questions about the application process? <br/> <br/>
                        <div className={css.contactTextLarge}> 
                            Contact Dr. Allison Wiedemeier!
                        </div>
                    </div>
                    <div className={css.emailContact}> 
                            <img className={css.emailImage} src={email} alt="Dr. wied email"/> 
                            <a href = "mailto: awiedemeier@ulm.edu"><br/>awiedemeier@ulm.edu</a>
                    </div>
                </div>



                <div className={css.questionsBox}>
                    <div className={css.picture1}>
                        <img src={qmark} alt="question mark"/>
                    </div>
                    <br/>
                    <div className={css.contactText}>
                        Any questions about the application process? <br/> <br/>
                        <div className={css.contactTextLarge}> 
                            OR check our FAQ Page!
                        </div>
                    </div>
                    <a className={css.FQA} href="/QuestionsPage">
                        <div>Frequent Questions</div>
                    </a>
                </div>
            </div>

            <div className={css.foot}>
                <a href="https://www.ulm.edu/">@ The University of Louisiana Monroe</a>
            </div>

        </div>
    )
}

export default Contact;