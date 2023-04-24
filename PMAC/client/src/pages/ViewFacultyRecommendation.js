import React, { useEffect  }  from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getFacultyForms} from '../actions/facultyForm';
import s from '../styles/StudentProfile.module.css';

const ViewFacultyRecommendation =({getFacultyForms, facultyForm:{facultyForms}, auth:{user}}) =>{
    const { userid } = useParams();
    useEffect(() => {
      getFacultyForms(userid)

      },[getFacultyForms, userid]);

      let recommendations ="";
      if(facultyForms){
      recommendations= facultyForms.map((exp)=>(
        <p>Name of Applicant: {exp.name_applicant}<br />
        Name of Evaluator: {exp.name_evaluator}<br />
        Title of Evaulator: {exp.title_evaluator}<br />
        Department of Evaluator: {exp.department_evaluator}<br />
        Intellectual Ability: {exp.intellect}<br />
        Motivation: {exp.motivation}<br />
        Initiative: {exp.initiative}<br />
        Personal and Social Maturity: {exp.socialMaturity}<br />
        Emotional Maturity: {exp.emotionalMaturity}<br />
        Dependability and Reliability: {exp.reliability}<br />
        Leadership: {exp.leadership}<br />
        Character/Integrity: {exp.character}<br />
        Verbal Skills: {exp.communication}<br />
        Capacity: {exp.capacity}<br />
        Strengths: {exp.strengths}<br />
        Weaknesses: {exp.weaknesses}<br />
        Potential: {exp.potential}<br />
        Additional Comments: {exp.comments}<br /></p>
      ))
      }
    //   console.log(recommendations)

      if(user &&user.type !== "Student"){
        return(
        
        
        <div className={s.profile}>
            <h2 style={{marinBottom:'25px'}}>Faculty recommendations</h2>
            <Sidebar role ="admin"/>
        {/* <p>First Name: {rec.fname}</p> */}
        {recommendations}
        </div>
        
        );}    

}

ViewFacultyRecommendation.propTypes={
    getFacultyForms: PropTypes.func.isRequired,
    facultyForm: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps =(state) =>({
    auth: state.auth,
    facultyForm: state.facultyForm
})
export default connect(mapStateToProps, {getFacultyForms})(
    ViewFacultyRecommendation
);