import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link, Navigate, useParams} from 'react-router-dom';
import {setAlert} from '../actions/alert';
import {facultyForm} from '../actions/facultyForm';
import {getProfileById} from '../actions/profile';
import propTypes from 'prop-types';
import jwt from 'jwt-decode';


import CSS from '../styles/facultyadvisory.module.css';
import profileReducer from '../reducers/profile';




const FacultyFormInfo = ({facultyForm, getProfileById}) => {
    const { token } = useParams();
    const user = jwt(token);
    // const profile = getProfileById(user.user.id)
    // // console.log(profile);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        user:user.user.id,
        name_applicant:"",
        name_evaluator:"",
        title_evaluator:"",
        department_evaluator:"",
        intellect:"",
        motivation:"",
        initiative:"",
        socialMaturity:"",
        emotionalMaturity:"",
        reliability:"", 
        leadership:"",
        character:"",
        communication:"",
        capacity:"",
        strengths:"",
        weaknesses:"",
        potential:"",
        comments:""
    });

    const onChange = e =>setFormData({...formData,[e.target.name]:e.target.value});
    const onSubmit = async (e) =>{
        e.preventDefault();
        facultyForm(formData);
        setIsSubmitted(true);
    }

    // if(isSubmitted){
    //     return <Navigate to ="/dashboardFaculty" />
    // }

        
    return (
        <body className={CSS.body}>

            <h1 className={CSS.h1}>Faculty Recommendation Form</h1>

            <form onSubmit={e => onSubmit(e)} onChange={e=> onChange(e)} required>

                <div for="name_applicant">Name of Applicant (Student):
                <input type="text" name="name_applicant" value={formData.name_applicant}
                onChange={e=> onChange(e)} placeholder="Enter the name of the student you are evaluating:" required/>
                </div>

                <div for="name_evaluator">Name of Evaluator:
                <input type="text" name="name_evaluator" value={formData.name_evaluator} 
                onChange={e=> onChange(e)} placeholder="Enter your name:" required/>
                </div>

                <div for="title_evaluator">Name of Evaluator:
                <input type="text" name="title_evaluator" value={formData.title_evaluator} 
                onChange={e=> onChange(e)} placeholder="Enter your title:" required/>
                </div>

                <div for="department_evaluator">Name of Evaluator:
                <input type="text" name="department_evaluator" value={formData.department_evaluator} 
                onChange={e=> onChange(e)} placeholder="Enter your department:" required/>
                </div>

                <label for="instruct">Please indicate your estimation of this applicant by selecting the appropriate description in the drop down menu's below. </label>
                <label for="intellect">Intellectual Ability</label>
                <select id="intellect" name="intellect" value={formData.intellect} onChange={e=> onChange(e)} required>
                <option value="">Select one</option>
                    <option value="Below Average">Below Average</option>
                    <option value="Average">Average</option>
                    <option value="Above Average">Above Average</option>
                    <option value="Exceptional">Exceptional</option>
                    <option value="Not Observed">Not Observed</option> 
                </select>

                <label for="motivation">Motivation</label>
                <select id="motivation" name="motivation" value={formData.motivation} onChange={e=> onChange(e)} required>
                <option value="">Select one</option>
                    <option value="Seems Uncertain">Seems Uncertain</option>
                    <option value="Seems Certain">Seems Certain</option>
                    <option value="Highly Motivated">Highly Motivated</option>
                    <option value="Not Observed">Not Observed</option> 
                </select>

                <label for="initiative">Initiative</label>
                <select id="initiative" name="initiative" value={formData.initiative} onChange={e=> onChange(e)} required>
                <option value="">Select one</option>
                    <option value="Needs Occasional Prodding">Needs Occasional Prodding</option>
                    <option value="Does All Assigned Work">Does All Assigned Work</option>
                    <option value="Does Suggested Extra Work">Does Suggested Extra Work</option>
                    <option value="Seeks Out Learning Oppurtunities">Seeks Out Learning Oppurtunities</option>
                    <option value="Not Observed">Not Observed</option>  
                </select>

                <label for="socialMaturity">Personal and Social Maturity</label>
                <select id="socialMaturity" name="socialMaturity" value={formData.socialMaturity} onChange={e=> onChange(e)} required>
                <option value="">Select one</option>
                    <option value="Below Average">Below Average</option>
                    <option value="Average">Average</option>
                    <option value="Above Average">Above Average</option>
                    <option value="Exceptional Maturity">Exceptional Maturity</option>
                    <option value="Not Observed">Not Observed</option>  
                </select>

                <label for="emotionalMaturity">Emotional Maturity</label>
                <select id="emotionalMaturity" name="emotionalMaturity" value={formData.emotionalMaturity} onChange={e=> onChange(e)} required>
                <option value="">Select one</option>
                    <option value="Very Excitable">Very Excitable</option>
                    <option value="Easily Upset">Easily Upset</option>
                    <option value="Usually Stable">Usually Stable</option>
                    <option value="Stable, well-balanced">Stable, well-balanced</option>
                    <option value="Not Observed">Not Observed</option>  
                </select>

                <label for="reliability">Dependability and Reliability</label>
                <select id="reliability" name="reliability" >
                <option value="">Select one</option>
                    <option value="Doubtful Reliability">Doubtful Reliability</option>
                    <option value="Usually Reliable">Usually Reliable</option>
                    <option value="Above Average Reliability">Above Average Reliability</option>
                    <option value="Unquestioned Reliability">Unquestioned Reliability</option>
                    <option value="Not Observed">Not Observed</option>  
                </select>

                <label for="leadership">Leadership</label>
                <select id="leadership" name="leadership">
                <option value="">Select one</option>
                    <option value="Satisfied to Follow">Satisfied to Follow</option>
                    <option value="Occasionally a Leader">Occasionally a Leader</option>
                    <option value="Frequently a Leader">Frequently a Leader</option>
                    <option value="Outstanding Leader">Outstanding Leader</option>
                    <option value="Not Observed">Not Observed</option>  
                </select>

                <label for="character">Character/Integrity</label>
                <select id="character" name="character">
                <option value="">Select one</option>
                    <option value="Untrustworthy">Untrustworthy</option>
                    <option value="Occasional Lapses">Occasional Lapses</option>
                    <option value="No Serious Flaws">No Serious Flaws</option>
                    <option value="Absolutely Trustworthy">Absolutely Trustworthy</option>
                    <option value="Not Observed">Not Observed</option>  
                </select>

                <label for="communication">Verbal Skills</label>
                <select id="communication" name="communication">
                <option value="">Select one</option>
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
            <div className={CSS.foot}>
                <a href="https://www.ulm.edu/">@ The University of Louisiana Monroe</a>
            </div>
        </body>
    )
};

FacultyFormInfo.propTypes ={
    setAlert: propTypes.func.isRequired,
    facultyForm: propTypes.func.isRequired,
    getProfileById: propTypes.func.isRequired,
    isAuthenticated: propTypes.bool
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {setAlert, facultyForm, getProfileById})(FacultyFormInfo);