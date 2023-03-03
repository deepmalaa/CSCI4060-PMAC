import React from 'react'
import s from '../styles/ApplicantInformation.module.css';

function Form1() {
    return (      
        <body>
            <div className={s.body}>
                <div className={s.title}> ULM_Pre-Medical Advisory Committee</div>
                    <div className={s.instructions}>
                        
                        I understand that members of the Pre-Medical Advisory Committee have access to my transcript, test scores,
                        personal statement and faculty evaluations submitted on my behalf. I understand that the committee evaluation
                        will be based on the submitted faculty evaluations, transcript(s), test scores, a personal statement, and the
                        committee interview. I, as the applicant, have made every effort to provide the committee with the full and correct
                        address where the evaluation letter for the pre-medical committee should be mailed, understanding that this may
                        not be the general address for the school in most cases.
                        

                        <p>Please check the box for all that you agree to:</p>
                    </div>
                    <form className={s.form}>
                    <label>
                        <input type="checkbox" name="authorize" value="true"/>
                        I hereby authorize the Pre-Medical Advisory Committee of the University of Louisiana at Monroe
                        to release the evaluation of the undersigned to the below listed professional schools and/or programs.
                    </label>

                    <label>
                        <input type="checkbox" name="evaluate" value="true"/>
                                    I will allow the committee members to evaluate my performance based on my academic record,
                        submitted materials, and the committee interview. I authorize the committee to prepare an evaluation
                        letter for me for the purposes of applying to the professional schools and/or programs listed below. I
                        understand that their evaluation and all items considered in making this recommendation are
                        confidential and I waive my right to see such evaluation.
                    </label>

                    <label>
                        <input type="checkbox" name="name_release" value="true"/>
                            I will allow my name to be released to the University if accepted to a professional school. The
                            University may use my name and the name of the professional school/ and or program for statistics and
                            recruitment endeavors. These statistics will be gathered for the Biology Program, Pre-Medical Interview
                            Committee and the University of Louisiana at Monroe.
                    </label>

                    <label>
                        Name (Print): <input type="text" name="name"/>
                        CWID Number: <input type="text" name="cwid"/>
                        Signature: <input type="text" name="signature"/>
                        Date: <input type="text" name="date"/>
                    </label>


                    <h4>Please provide the physical addresses of each school you are applying to if those schools require individual letters. If you are using an application system, please list the School and then the Application service.</h4>
                    <h4>All deadlines for all schools need to be listed. Most schools have two deadline dates. Please provide the letter deadline date.</h4>

                
                    <div>
                    <label for="school1">Name of School, Contact Person and Address</label>
                    <input type="text" id="school1" name="school1"/>
                    
                    <label for="deadline1">Letter Deadline Date:</label>
                    <input type="text" id="deadline1" name="deadline1"/>
                    </div>
                    <br/>
                    <div>
                    <label for="school2">Name of School, Contact Person and Address</label>
                    <input type="text" id="school2" name="school2"/>
                    
                    <label for="deadline2">Letter Deadline Date:</label>
                    <input type="text" id="deadline2" name="deadline2"/>
                    </div>
                    <br/>
                    <div>
                    <label for="school3">Name of School, Contact Person and Address</label>
                    <input type="text" id="school3" name="school3"/>
                    
                    <label for="deadline3">Letter Deadline Date:</label>
                    <input type="text" id="deadline3" name="deadline3"/>
                    </div>
                    <br/>
                    <div>
                    <label for="school4">Name of School, Contact Person and Address</label>
                    <input type="text" id="school4" name="school4"/>
                    
                    <label for="deadline4">Letter Deadline Date:</label>
                    <input type="text" id="deadline4" name="deadline4"/>
                    </div>
                    <br/>
                    <div>
                    <label for="school5">Name of School, Contact Person and Address</label>
                    <input type="text" id="school5" name="school5"/>
                    
                    <label for="deadline5">Letter Deadline Date:</label>
                    <input type="text" id="deadline5" name="deadline5"/>
                    </div>
                    <br/>
                    <div>
                    <label for="school6">Name of School, Contact Person and Address</label>
                    <input type="text" id="school6" name="school6"/>
                    
                    <label for="deadline6">Letter Deadline Date:</label>
                    <input type="text" id="deadline6" name="deadline6"/>
                </div>

            </form>
            </div>
        </body>
        )
    }
    
    export default Form1;        