import React from 'react';

import CSS from '../styles/facultyadvisory.css';


function FacultyAdvisoryForm() {
    return (
        <body className={CSS.body}>
            <div className={CSS.home}>
                <a href="/dashboardFaculty">HOME</a>
            </div>
            <h1 className={CSS.h1}>Pre-Medical Advisory Form</h1>
            <form>

                <label for="name_applicant">Name of Applicant:</label>
                <input type="text" id="name_applicant" name="name_applicant"/>
                <label for="name_evaluator">Name of Evaluator:</label>
                <input type="text" id="name_evaluator" name="name_evaluator"/>


                <label for="instruct">Please indicate your estimation of this applicant by selecting the appropriate description in the drop down menu's below. </label>
                <label for="intellect">Intellectual Ability</label>
                <select id="intellect" name="intellect">
                    <option value="Below Average">Below Average</option>
                    <option value="Average">Average</option>
                    <option value="Above Average">Above Average</option>
                    <option value="Exceptional">Exceptional</option>
                    <option value="Not Observed">Not Observed</option> 
                </select>

                <label for="motivation">Motivation</label>
                <select id="motivation" name="motivation">
                    <option value="Seems Uncertain">Seems Uncertain</option>
                    <option value="Seems Certain">Seems Certain</option>
                    <option value="Highly Motivated">Highly Motivated</option>
                    <option value="Not Observed">Not Observed</option> 
                </select>

                <label for="initiative">Initiative</label>
                <select id="initiative" name="initiative">
                    <option value="Needs Occasional Prodding">Needs Occasional Prodding</option>
                    <option value="Does All Assigned Work">Does All Assigned Work</option>
                    <option value="Does Suggested Extra Work">Does Suggested Extra Work</option>
                    <option value="Seeks Out Learning Oppurtunities">Seeks Out Learning Oppurtunities</option>
                    <option value="Not Observed">Not Observed</option>  
                </select>

                <label for="socialMaturity">Personal and Social Maturity</label>
                <select id="socialMaturity" name="socialMaturity">
                    <option value="Below Average">Below Average</option>
                    <option value="Average">Average</option>
                    <option value="Above Average">Above Average</option>
                    <option value="Exceptional Maturity">Exceptional Maturity</option>
                    <option value="Not Observed">Not Observed</option>  
                </select>

                <label for="emotionalMaturity">Emotional Maturity</label>
                <select id="emotionalMaturity" name="emotionalMaturity">
                    <option value="Very Excitable">Very Excitable</option>
                    <option value="Easily Upset">Easily Upset</option>
                    <option value="Usually Stable">Usually Stable</option>
                    <option value="Stable, well-balanced">Stable, well-balanced</option>
                    <option value="Not Observed">Not Observed</option>  
                </select>

                <label for="reliability">Dependability and Reliability</label>
                <select id="reliability" name="reliability">
                    <option value="Doubtful Reliability">Doubtful Reliability</option>
                    <option value="Usually Reliable">Usually Reliable</option>
                    <option value="Above Average Reliability">Above Average Reliability</option>
                    <option value="Unquestioned Reliability">Unquestioned Reliability</option>
                    <option value="Not Observed">Not Observed</option>  
                </select>

                <label for="leadership">Leadership</label>
                <select id="leadership" name="leadership">
                    <option value="Satisfied to Follow">Satisfied to Follow</option>
                    <option value="Occasionally a Leader">Occasionally a Leader</option>
                    <option value="Frequently a Leader">Frequently a Leader</option>
                    <option value="Outstanding Leader">Outstanding Leader</option>
                    <option value="Not Observed">Not Observed</option>  
                </select>

                <label for="character">Character/Integrity</label>
                <select id="character" name="character">
                    <option value="Untrustworthy">Untrustworthy</option>
                    <option value="Occasional Lapses">Occasional Lapses</option>
                    <option value="No Serious Flaws">No Serious Flaws</option>
                    <option value="Absolutely Trustworthy">Absolutely Trustworthy</option>
                    <option value="Not Observed">Not Observed</option>  
                </select>

                <label for="communication">Verbal Skills</label>
                <select id="communication" name="communication">
                    <option value="Below Average">Below Average</option>
                    <option value="Average">Average</option>
                    <option value="Above Average">Above Average</option>
                    <option value="Very Articulate">Very Articulate</option>
                    <option value="Not Observed">Not Observed</option>  
                </select>




                <label for="capacity">How long and in what capacity have you known or observed this student?</label>
                <textarea id="capacity" name="capacity"></textarea>

                <label for="strengths">What do you consider to be the applicant’s major strength(s)?</label>
                <textarea id="strengths" name="strengths"></textarea>

                <label for="weaknesses">What do you consider to be the applicant’s major weakness(es)?</label>
                <textarea id="weaknesses" name="weaknesses"></textarea>

                <label for="potential">Please indicate the applicant’s overall potential for success:</label>
                <select id="potential" name="potential">
                    <option value="Below Average">Below Average</option>
                    <option value="Average">Average</option>
                    <option value="Above Average">Above Average</option>
                    <option value="Well Above Average">Well Above Average</option>
                    <option value="Truly Outstanding (TOPH 5%)">Tr</option> 
                </select>

                <label for="comments">Additional Comments:</label>
                <textarea id="comments" name="comments" placeholder="Enter your comments"></textarea>

                <button type="submit">Submit</button>
            </form>
        </body>
    )
}

export default FacultyAdvisoryForm;