import React from 'react'
import s from '../styles/ApplicantInformation.module.css';


function Form1() {
    return (
    
        <body>
            <div className={s.body}>
                <form className={s.form}>
                    <label>Full Name (Print):</label>
                    <input type="text" name="fullName"/> 

                    <label>Date:</label>
                    <input type="date" name="date"/>

                    <label>ULM CWID #:</label>
                    <input type="text" name="cwid"/>

                    <label>Local Address:</label>
                    <input type="text" name="address"/>

                    <label>Cell Phone:</label>
                    <input type="tel" name="cellPhone"/>

                    <label>ULM E-mail Address:</label>
                    <input type="email" name="ulmEmail"/>

                    <label>Alternative e-mail address that can be used upon graduation:</label>
                    <input type="email" name="altEmail"/>

                    <label>Major(s):</label>
                    <input type="text" name="major"/>

                    <label>Minor(s):</label>
                    <input type="text" name="minor"/>

                    <label>Date of Expected Graduation from ULM:</label>
                    <input type="date" name="expectedGraduation"/>

                    <label>Overall Collegiate GPA:</label>
                    <input type="text" name="collegiateGpa"/>

                    <label>Date of Proposed Entrance to Professional School:</label>
                    <input type="date" name="proposedEntrance"/>

                    <label>Score of your most recent professional entry exam (MCAT, DAT, OAT, GRE). Please include your breakdown scores:</label>
                    <textarea name="examScores"></textarea>

                    <label>Date of exam taken or expected date of exam:</label>
                    <input type="date" name="examDate"/>

                    <label>Type of School Application will be sent:</label>
                    <input type="text" name="schoolApplication"/>

                    <label>AMCAS Letter ID:</label>
                    <input type="text" name="AMCASletterID"/>
                </form>
            </div>
        </body>

    )
}

export default Form1;