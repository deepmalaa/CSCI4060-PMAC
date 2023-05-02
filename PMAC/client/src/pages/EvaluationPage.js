import React from 'react';
import '../styles/StatusPage.css';
import { Link } from 'react-router-dom';
import s from '../styles/StudentProfile.module.css';

function EvaluationPage(props) {
  const { myProp, profile, evaluator, applicationType } = props;

  return (
    <form className={s.form} style={{height:'100%', minHeight:'400px'}}>
      
      <div style={{ textAlign: 'left', maxWidth: '100%', margin:'10px'}} dangerouslySetInnerHTML={{ __html: myProp }} />
    </form>
  );
}

export default EvaluationPage;

//<div className='date'>Date: {props.applications[application].submissionDate}</div>