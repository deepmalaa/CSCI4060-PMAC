import React from 'react';
import '../styles/StatusPage.css';
import { Link } from 'react-router-dom';

function EvaluationPage(props) {
  const { myProp, profile, evaluator, applicationType } = props;

  return (
    <form>
      <div style={{ textAlign: 'left', maxWidth: '100%' }} dangerouslySetInnerHTML={{ __html: myProp }} />
      
      <p>Evaluator: {props.evaluator}</p>
      <p>Application Type: {applicationType}</p>
    </form>
    
  );
}

export default EvaluationPage;

//<div className='date'>Date: {props.applications[application].submissionDate}</div>